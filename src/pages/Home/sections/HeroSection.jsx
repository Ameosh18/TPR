import { ArchMask } from '../../../components/ArchMask/ArchMask'
import { ArcAccent, ArcAccentDouble } from '../../../components/ArcAccent/ArcAccent'
import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className={styles.hero}>
      <ArcAccent size={120} rotation={-30} opacity={0.35} className={styles.arcTopLeft} />
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.tag}>· {h.locationTag}</span>
          <h1 className={styles.headline}>
            {h.line1}<br />{h.line2}<br /><em>{h.line3}</em>
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

        {/* RIGHT */}
        <div className={styles.right}>
          <ArcAccentDouble size={100} rotation={180} opacity={0.4} className={styles.arcRight} />
          <div className={styles.imageCollage}>
            <ArchMask size="lg" bordered className={styles.imgPrimary} />
            <ArchMask size="md" className={styles.imgSecondary} />
            <ArchMask size="sm" className={styles.imgTertiary} />
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>{h.stat2num}</span>
            <span className={styles.statLabel}>{h.stat2label}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
