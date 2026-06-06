import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline'
import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { ArchMask } from '../../../components/ArchMask/ArchMask'
import { useLanguage } from '../../../contexts/LanguageContext'
import { iconMap } from '../../../utils/iconMap'
import styles from './MeetDrOshin.module.css'

export default function MeetDrOshin() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <FadeUp className={styles.photoCol}>
          <div className={styles.photoMain}>
            <ArchMask size="lg" bordered alt={a.photoLabel1} className={styles.archPhoto} />
          </div>
        </FadeUp>

        <FadeUp className={styles.contentCol}>
          <span className={styles.tag}>{a.tag}</span>
          <h2 className={styles.heading}>
            {a.heading1}<br /><em>{a.heading2}</em>
          </h2>

          <div className={styles.mvRow}>
            <div className={styles.mvCard}>
              <MagnifyingGlassIcon className={styles.mvIcon} />
              <div>
                <h4 className={styles.mvTitle}>{a.missionTitle}</h4>
                <p className={styles.mvText}>{a.missionText}</p>
              </div>
            </div>
            <div className={styles.mvCard}>
              <EyeIcon className={styles.mvIcon} />
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
          {a.features.map((f, i) => {
            const Icon = iconMap[f.icon]
            return (
              <div key={i} className={styles.featureItem}>
                {Icon && <Icon className={styles.featureIcon} />}
                <h4 className={styles.featureTitle}>{f.title}</h4>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            )
          })}
        </div>
        <div className={styles.photoSecondary}>
          <ArchMask size="md" alt={a.photoLabel2} />
        </div>
      </div>
    </section>
  )
}
