import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import styles from './BookCTA.module.css'

export default function BookCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <FadeUp className={styles.inner}>
          <h2 className={`heading-section ${styles.heading}`}>Ready to move without pain?</h2>
          <p className={styles.sub}>Book your first consultation with Dr. Oshin — in-clinic at Kothrud, Pune.</p>
          <div className={styles.actions}>
            <Button href="https://wa.link/bddr6y" variant="cream">Book a Consultation</Button>
            <span className={styles.handle}>@tpr_rehabreimagined</span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
