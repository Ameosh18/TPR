import FadeUp from '../../../components/FadeUp/FadeUp'
import SectionWrapper from '../../../components/SectionWrapper/SectionWrapper'
import styles from './WhoItsFor.module.css'

const personas = [
  {
    icon: '💻',
    heading: 'Desk workers in pain',
    body: 'Neck, shoulders, lower back from hours at a screen — we know the pattern and we know how to break it.',
  },
  {
    icon: '🏃',
    heading: 'Athletes in recovery',
    body: 'Whether it\'s a sprain, post-op rehab, or overuse injury — we build the plan that gets you back to the sport you love.',
  },
  {
    icon: '🌿',
    heading: 'Seniors wanting mobility',
    body: 'Movement is medicine. We help older adults regain strength, balance, and independence — one session at a time.',
  },
]

export default function WhoItsFor() {
  return (
    <SectionWrapper>
      <FadeUp>
        <span className={`label ${styles.tag}`}>Who we see</span>
        <h2 className={`heading-section ${styles.heading}`}>We see all kinds of bodies.</h2>
        <p className={styles.sub}>Young professionals, athletes, seniors — what they share is wanting to move without pain.</p>
      </FadeUp>
      <div className={styles.grid}>
        {personas.map((p, i) => (
          <FadeUp key={i}>
            <div className={`card-hover ${styles.card}`}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardHead}>{p.heading}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  )
}
