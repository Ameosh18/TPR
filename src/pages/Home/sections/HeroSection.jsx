import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            {h.line1}<br />{h.line2}<br />{h.line3}<br />
            <em>{h.line4}</em>
          </h1>
          <p className={styles.sub}>{h.sub}</p>
          <div className={styles.ctas}>
            <Button href="https://wa.link/bddr6y" variant="primary">{h.bookBtn}</Button>
            <Button href="/services" variant="ghostLight">{h.servicesBtn}</Button>
          </div>
        </div>

        <div className={styles.floatingRow}>
          {[
            { a: h.float1a, b: h.float1b },
            { a: h.float2a, b: h.float2b },
          ].map((l, i) => (
            <div key={i} className={styles.floatingLabel}>
              <div className={styles.floatingDot} />
              <div>
                <p className={styles.floatingLine1}>{l.a}</p>
                <p className={styles.floatingLine2}>{l.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
