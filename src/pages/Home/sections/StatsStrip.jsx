import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './StatsStrip.module.css'

export default function StatsStrip() {
  const { t } = useLanguage()

  return (
    <section className={styles.strip}>
      <div className={`container ${styles.grid}`}>
        {t.stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.number}>{s.number}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
