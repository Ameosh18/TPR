import { useState } from 'react'
import { faqs } from '../../../data/faq'
import styles from './FAQSection.module.css'

export default function FAQSection() {
  const [open, setOpen] = useState(null)
  const visible = faqs.slice(0, 5)

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>

        <div className={styles.left}>
          <span className={styles.tag}>· FAQ</span>
          <h2 className={styles.heading}>
            Frequently Asked<br />
            <em>Questions</em>
          </h2>
          <p className={styles.sub}>
            Find answers to common questions about physiotherapy,
            your care and recovery process.
          </p>
        </div>

        <div className={styles.right}>
          {visible.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={styles.icon}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className={styles.answer}>{item.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
