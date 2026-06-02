import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Process.module.css'

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null)
  const { t } = useLanguage()
  const p = t.processPage
  const f = t.faq

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>{p.heroTag}</span>
            <h1 className={`heading-display ${styles.headline}`}>{p.heroHead}</h1>
            <p className={styles.sub}>{p.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.before}`}>
        <div className="container">
          <FadeUp>
            <h2 className={`heading-section ${styles.sectionHead}`}>{p.beforeHead}</h2>
          </FadeUp>
          <FadeUp>
            <div className={styles.beforeGrid}>
              {p.beforeItems.map((item, i) => (
                <div key={i} className={styles.beforeItem}>
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.tag2}`}>{p.stepsTag}</span>
            <h2 className={`heading-section ${styles.sectionHead}`}>{p.stepsHead}</h2>
          </FadeUp>
          <div className={styles.steps}>
            {p.steps.map((s, i) => (
              <FadeUp key={i}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div>
                    <h3 className={styles.stepHead}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <FadeUp>
            <h2 className={`heading-section ${styles.sectionHead}`}>{p.faqHead}</h2>
          </FadeUp>
          <div className={styles.faqList}>
            {f.items.map((item, i) => (
              <FadeUp key={i}>
                <div className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                  <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className={styles.chevron}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className={styles.faqA}><p>{item.a}</p></div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeUp className={styles.ctaInner}>
            <h2 className={`heading-section ${styles.ctaHead}`}>{p.ctaHead}</h2>
            <Button href="https://wa.link/bddr6y" variant="cream">{p.ctaBtn}</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
