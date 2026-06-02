import { NavLink } from 'react-router-dom'
import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import styles from './ConditionsTeaser.module.css'

const pills = [
  'Lower Back Pain', 'Neck Pain', 'Shoulder Impingement', 'Knee Injuries',
  'Post-surgical Rehab', 'Sports Injuries', 'Frozen Shoulder', 'Sciatica',
  'Posture Correction', 'Hip Pain', 'Ankle Sprains', 'Cervicogenic Headaches',
]

export default function ConditionsTeaser() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUp>
          <span className={`label ${styles.tag}`}>Conditions we treat</span>
          <h2 className={`heading-section ${styles.heading}`}>Whether it hurts now or has for years.</h2>
        </FadeUp>
        <FadeUp>
          <div className={styles.pills}>
            {pills.map(p => (
              <NavLink key={p} to="/conditions" className={styles.pill}>{p}</NavLink>
            ))}
          </div>
        </FadeUp>
        <FadeUp>
          <div className={styles.cta}>
            <Button href="/conditions" variant="cream">See all conditions →</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
