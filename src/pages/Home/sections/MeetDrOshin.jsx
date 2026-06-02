import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import styles from './MeetDrOshin.module.css'

const features = [
  { icon: '🤝', title: 'Expert Team', body: 'Highly trained physiotherapists specialising in diverse treatments.' },
  { icon: '📋', title: 'Personalised Plans', body: 'Treatment plans designed around your condition and goals.' },
  { icon: '📈', title: 'Measurable Results', body: 'You can track your progress as you improve mobility and reduce pain.' },
  { icon: '🌿', title: 'Holistic Care', body: 'Addressing posture, movement, and overall body function.' },
]

export default function MeetDrOshin() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* Left — photo */}
        <FadeUp className={styles.photoCol}>
          <div className={styles.photoMain}>
            <div className={styles.photoPlaceholder}>
              <span>Dr. Oshin</span>
              <span className={styles.photoNote}>Portrait photo coming soon</span>
            </div>
          </div>
        </FadeUp>

        {/* Right — content */}
        <FadeUp className={styles.contentCol}>
          <span className={styles.tag}>· About Us</span>
          <h2 className={styles.heading}>
            Advanced Care Solutions In<br />
            <em>Physiotherapy Care</em>
          </h2>

          <div className={styles.mvRow}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <div>
                <h4 className={styles.mvTitle}>Mission</h4>
                <p className={styles.mvText}>
                  To provide evidence-based physiotherapy care focused on recovery, mobility, and adding physical well-being for all patients.
                </p>
              </div>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>👁️</span>
              <div>
                <h4 className={styles.mvTitle}>Vision</h4>
                <p className={styles.mvText}>
                  To be a trusted provider of physiotherapy care that helps individuals move better and live with confidence at every stage of life.
                </p>
              </div>
            </div>
          </div>

          <Button href="/about" variant="primary">About More →</Button>
        </FadeUp>
      </div>

      {/* Features row + second photo */}
      <div className={`container ${styles.bottomRow}`}>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.featureBody}>{f.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.photoSecondary}>
          <div className={styles.photoPlaceholder2}>
            <span>Clinic</span>
            <span className={styles.photoNote}>Session photo coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
