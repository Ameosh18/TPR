import Button from '../../../components/Button/Button'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={`label ${styles.pill}`}>Kothrud, Pune · Est. 2015</span>
          <h1 className={`heading-display ${styles.headline}`}>
            Your body deserves<br />
            more than a diagnosis<br />
            <em>and a sheet of exercises.</em>
          </h1>
          <p className={styles.sub}>
            Evidence-based physiotherapy in Kothrud, Pune — tailored to you, not a template.
            Dr. Oshin Ninawe Kulkarni has spent 9+ years fixing what standard clinics miss.
          </p>
          <div className={styles.ctas}>
            <Button href="https://wa.link/bddr6y" variant="cream">Book a Consultation</Button>
            <Button href="/process" variant="ghostLight">See how it works</Button>
          </div>
          <div className={styles.trust}>
            <span>✦ 9+ years clinical experience</span>
            <span>✦ Evidence-based care</span>
            <span>✦ Kothrud, Pune</span>
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
        <span className={styles.chevron}>↓</span>
      </div>
    </section>
  )
}
