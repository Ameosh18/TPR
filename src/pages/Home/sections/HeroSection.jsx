import Button from '../../../components/Button/Button'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={`label ${styles.pill}`}>Kothrud, Pune · Evidence-based Physiotherapy</span>
        <h1 className={`heading-display ${styles.headline}`}>
          Ready to Reimagine your<br />
          <em>way to Rehabilitation?</em>
        </h1>
        <p className={styles.sub}>
          Dr. Oshin Ninawe Kulkarni — BPT, 9+ years clinical experience.
          Tailored care, not a template.
        </p>
        <div className={styles.ctas}>
          <Button href="https://wa.link/bddr6y" variant="primary">Book a Consultation</Button>
          <Button href="/process" variant="ghost">See how it works</Button>
        </div>
        <div className={styles.trust}>
          <span>✦ 9+ years experience</span>
          <span>✦ Evidence-based</span>
          <span>✦ Kothrud, Pune</span>
        </div>
      </div>
    </section>
  )
}
