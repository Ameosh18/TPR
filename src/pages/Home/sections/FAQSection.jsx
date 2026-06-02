import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './FAQSection.module.css'

export default function FAQSection() {
  const [open, setOpen] = useState(null)
  const { t } = useLanguage()
  const f = t.faq

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <span className={styles.tag}>{f.tag}</span>
          <h2 className={styles.heading}>
            {f.heading1}<br /><em>{f.heading2}</em>
          </h2>
          <p className={styles.sub}>{f.sub}</p>
        </div>

        <div className={styles.right}>
          {f.items.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={styles.icon}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className={styles.answer}>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
