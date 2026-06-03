import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './MeetDrOshin.module.css'

export default function MeetDrOshin() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <FadeUp className={styles.photoCol}>
          <div className={styles.photoMain}>
            <div className={styles.photoPlaceholder}>
              <span>{a.photoLabel1}</span>
              <span className={styles.photoNote}>{a.photoNote1}</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp className={styles.contentCol}>
          <span className={styles.tag}>{a.tag}</span>
          <h2 className={styles.heading}>
            {a.heading1}<br /><em>{a.heading2}</em>
          </h2>

          <div className={styles.mvRow}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <div>
                <h4 className={styles.mvTitle}>{a.missionTitle}</h4>
                <p className={styles.mvText}>{a.missionText}</p>
              </div>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>👁️</span>
              <div>
                <h4 className={styles.mvTitle}>{a.visionTitle}</h4>
                <p className={styles.mvText}>{a.visionText}</p>
              </div>
            </div>
          </div>

          <Button href="/about" variant="primary">{a.btn}</Button>
        </FadeUp>
      </div>

      <div className={`container ${styles.bottomRow}`}>
        <div className={styles.featuresGrid}>
          {a.features.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.photoSecondary}>
          <div className={styles.photoPlaceholder2}>
            <span>{a.photoLabel2}</span>
            <span className={styles.photoNote}>{a.photoNote2}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
