import FadeUp from '../../../components/FadeUp/FadeUp'
import styles from './TPRDifference.module.css'

const pillars = [
  { title: 'Evidence-based care', body: 'Every treatment is grounded in current clinical research, not habit or guesswork. We follow the science — and we explain it.' },
  { title: 'Tailored to you', body: 'Your body, your lifestyle, your goals. No two plans are the same because no two patients are the same.' },
  { title: 'Calm and unhurried', body: 'We take the time to actually understand what\'s going on before we treat it. A 60-minute first session, not a 15-minute check-in.' },
]

export default function TPRDifference() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <FadeUp className={styles.left}>
          <span className={`label ${styles.tag}`}>The TPR difference</span>
          <h2 className={`heading-section ${styles.heading}`}>
            <em>Rehab reimagined.</em>
          </h2>
          <p className={styles.sub}>
            Standard physio clinics are built for volume. We're built for outcomes.
          </p>
        </FadeUp>
        <div className={styles.right}>
          {pillars.map((p, i) => (
            <FadeUp key={i}>
              <div className={styles.pillar}>
                <span className={styles.num}>0{i + 1}</span>
                <div>
                  <h3 className={styles.pillarHead}>{p.title}</h3>
                  <p className={styles.pillarBody}>{p.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
