#!/usr/bin/env node
/**
 * Translation sanity check.
 * Walks the `en` translation tree and verifies every key exists in `mr`
 * with a non-empty value. Exits 1 on any failure so CI blocks the deploy.
 */

import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

// Dynamic import so we can consume the ES module
const { translations } = await import(resolve(__dirname, '../src/i18n/translations.js'))

const LANGUAGES = Object.keys(translations)
const BASE = 'en'
let errors = 0

function walk(base, compare, path, baseLang, compareLang) {
  if (Array.isArray(base)) {
    if (!Array.isArray(compare)) {
      console.error(`  ✗  [${path}]  expected array in '${compareLang}', got ${typeof compare}`)
      errors++
      return
    }
    // For arrays of objects, check each item has the same keys
    base.forEach((item, i) => {
      if (typeof item === 'object' && item !== null) {
        const cItem = compare[i]
        if (!cItem) {
          console.error(`  ✗  [${path}[${i}]]  missing entry in '${compareLang}'`)
          errors++
        } else {
          walk(item, cItem, `${path}[${i}]`, baseLang, compareLang)
        }
      }
    })
    return
  }

  if (typeof base === 'object' && base !== null) {
    for (const key of Object.keys(base)) {
      const childPath = path ? `${path}.${key}` : key
      if (compare === undefined || compare === null || !(key in compare)) {
        console.error(`  ✗  [${childPath}]  missing in '${compareLang}'`)
        errors++
      } else {
        walk(base[key], compare[key], childPath, baseLang, compareLang)
      }
    }
    return
  }

  // Leaf value — check it exists and is non-empty
  if (compare === undefined || compare === null || compare === '') {
    console.error(`  ✗  [${path}]  empty/missing in '${compareLang}'`)
    errors++
  }
}

console.log(`\nTranslation sanity check (base: '${BASE}')\n`)
console.log(`Languages: ${LANGUAGES.join(', ')}\n`)

for (const lang of LANGUAGES) {
  if (lang === BASE) continue
  console.log(`Checking '${BASE}' → '${lang}' ...`)
  walk(translations[BASE], translations[lang], '', BASE, lang)
}

if (errors === 0) {
  console.log(`\n✓  All translations complete.\n`)
  process.exit(0)
} else {
  console.error(`\n✗  ${errors} translation issue${errors === 1 ? '' : 's'} found. Fix before deploying.\n`)
  process.exit(1)
}
