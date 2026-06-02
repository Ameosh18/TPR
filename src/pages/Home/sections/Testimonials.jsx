import FadeUp from '../../../components/FadeUp/FadeUp'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import { testimonials } from '../../../data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <SectionWrapper>
      <FadeUp>
        <span className={`label ${styles.tag}`}>Patient stories</span>
        <h2 className={`heading-section ${styles.heading}`}><em>What patients say.</em></h2>
      </FadeUp>
      <div className={styles.grid}>
        {testimonials.slice(0, 3).map((t, i) => (
          <FadeUp key={i}>
            <div className={`card-hover ${styles.card}`}>
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <div className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  )
}
