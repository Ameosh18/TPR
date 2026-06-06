import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { PillMask } from '../../../components/PillMask/PillMask'
import { StarAccent } from '../../../components/StarAccent/StarAccent'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './MeetDrOshin.module.css'

export default function MeetDrOshin() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT — overlapping pill images + stat callouts */}
        <FadeUp className={styles.imageCol}>
          <StarAccent size={40} opacity={0.5} className={styles.star} />
          <div className={styles.imgStack}>
            <PillMask size="lg" className={styles.imgMain} />
            <PillMask size="sm" className={styles.imgAlt} />
          </div>
          <div className={styles.statA}>
            <span className={styles.statNum}>9+</span>
            <span className={styles.statLabel}>{a.stat1label || 'Years Experience'}</span>
          </div>
          <div className={styles.statB}>
            <span className={styles.statNum}>1K+</span>
            <span className={styles.statLabel}>{a.stat2label || 'Patients Helped'}</span>
          </div>
        </FadeUp>

        {/* RIGHT */}
        <FadeUp className={styles.textCol}>
          <span className={styles.label}>{a.tag}</span>
          <h2 className={styles.heading}>
            {a.heading1}<br /><em>{a.heading2}</em>
          </h2>
          <p className={styles.body}>{a.missionText}</p>
          <Button href="/about" variant="ghost">{a.btn}</Button>
        </FadeUp>
      </div>
    </section>
  )
}
