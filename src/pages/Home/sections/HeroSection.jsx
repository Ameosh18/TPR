import Button from '../../../components/Button/Button'
import styles from './HeroSection.module.css'

const floatingLabels = [
  { line1: 'Personalised', line2: 'Physiotherapy Treatment' },
  { line1: 'Qualified and Trained', line2: 'Physiotherapy Experts' },
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Relieve Pain,<br />Restore Mobility<br />&amp; Strength —<br />
            <em>Body &amp; Mind</em>
          </h1>
          <p className={styles.sub}>
            Targeted care focused on relieving pain, improving movement, and restoring
            everyday comfort through guided, personalised hands-on treatment.
          </p>
          <div className={styles.ctas}>
            <Button href="https://wa.link/bddr6y" variant="primary">Book Appointment</Button>
            <Button href="/services" variant="ghostLight">Our Services</Button>
          </div>
        </div>

        <div className={styles.floatingRow}>
          {floatingLabels.map((l, i) => (
            <div key={i} className={styles.floatingLabel}>
              <div className={styles.floatingDot} />
              <div>
                <p className={styles.floatingLine1}>{l.line1}</p>
                <p className={styles.floatingLine2}>{l.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
