import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import styles from './MeetDrOshin.module.css'

export default function MeetDrOshin() {
  return (
    <SectionWrapper>
      <div className={styles.grid}>
        <FadeUp className={styles.photoWrap}>
          <div className={styles.photo}>
            <div className={styles.photoPlaceholder}>
              <span>Dr. Oshin</span>
              <span className={styles.photoNote}>Portrait photo coming soon</span>
            </div>
          </div>
        </FadeUp>
        <FadeUp className={styles.bio}>
          <span className={`label ${styles.tag}`}>Founder & Physiotherapist</span>
          <h2 className={`heading-section ${styles.name}`}>Dr. Oshin Ninawe Kulkarni</h2>
          <p className={`heading-sub ${styles.creds}`}>BPT · 9+ years of clinical experience</p>
          <p className={styles.para}>
            Dr. Oshin started The Physio Room after nearly a decade in clinical practice — long enough to see what standard physiotherapy was getting right, and what it was consistently getting wrong. Too many patients were leaving with exercises they didn't understand, from conditions that hadn't been properly explained.
          </p>
          <p className={styles.para}>
            TPR was built on a different premise: that people heal better when they understand their own body. Every session at the clinic starts with listening — not prescribing.
          </p>
          <p className={styles.para}>
            With 9+ years of hands-on clinical experience, a background in manual therapy, and a particular interest in sports rehab and postural correction, Dr. Oshin works with everyone from competitive athletes to seniors who want to move through their day without pain.
          </p>
          <Button href="/about" variant="primary">Read her story →</Button>
        </FadeUp>
      </div>
    </SectionWrapper>
  )
}
