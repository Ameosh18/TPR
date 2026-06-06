import { PillMask } from '../../../components/PillMask/PillMask'
import { StarAccent } from '../../../components/StarAccent/StarAccent'
import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.headline}>
            {h.line1}<br />{h.line2}<br />{h.line3}<br /><em>{h.line4}</em>
          </h1>
          <p className={styles.sub}>{h.sub}</p>
          <div className={styles.ctas}>
            <Button href="https://wa.link/bddr6y" variant="primary">{h.bookBtn}</Button>
            <Button href="/process" variant="ghost">{h.processBtn}</Button>
          </div>
          <div className={styles.trust}>
            {[
              { num: h.stat1num, label: h.stat1label },
              { num: h.stat2num, label: h.stat2label },
              { num: h.stat3num, label: h.stat3label },
            ].map((s, i) => (
              <div key={i} className={styles.trustItem}>
                <span className={styles.trustNum}>{s.num}</span>
                <span className={styles.trustLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — two overlapping tall pill images + star accent */}
        <div className={styles.right}>
          <StarAccent size={44} opacity={0.6} className={styles.starTR} />
          <StarAccent size={28} opacity={0.35} rotation={30} className={styles.starBL} />
          <div className={styles.pillGroup}>
            <PillMask size="lg" className={styles.pill1} />
            <PillMask size="md" className={styles.pill2} />
          </div>
        </div>
      </div>
    </section>
  )
}
