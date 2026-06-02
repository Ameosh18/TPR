import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Tag from '../../components/Tag/Tag'
import Button from '../../components/Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Conditions.module.css'

export default function Conditions() {
  const { t } = useLanguage()
  const cp = t.conditionsPage
  const [activeIdx, setActiveIdx] = useState(0)

  const activeLabel = cp.categories[activeIdx]
  const filtered = activeIdx === 0
    ? cp.conditions
    : cp.conditions.filter(c => c.category === activeLabel)

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>{cp.tag}</span>
            <h1 className={`heading-display ${styles.headline}`}>{cp.heading}</h1>
            <p className={styles.sub}>{cp.sub}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <FadeUp>
            <div className={styles.filters}>
              {cp.categories.map((cat, i) => (
                <Tag key={cat} label={cat} active={activeIdx === i} onClick={() => setActiveIdx(i)} />
              ))}
            </div>
          </FadeUp>
          <div className={styles.grid}>
            {filtered.map((c, i) => (
              <FadeUp key={c.name}>
                <div className={`card-hover ${styles.card}`}>
                  <span className={styles.catBadge}>{c.category}</span>
                  <h3 className={styles.cardHead}>{c.name}</h3>
                  <p className={styles.cardBody}>{c.description}</p>
                  <Button href="/contact" variant="ghost" className={styles.cardCta}>{cp.bookCta}</Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
