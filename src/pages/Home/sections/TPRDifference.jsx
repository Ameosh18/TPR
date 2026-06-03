import FadeUp from '../../../components/FadeUp/FadeUp'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './TPRDifference.module.css'

export default function TPRDifference() {
  const { t } = useLanguage()
  const d = t.difference

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <FadeUp className={styles.left}>
          <span className={`label ${styles.tag}`}>{d.tag}</span>
          <h2 className={`heading-section ${styles.heading}`}>
            <em>{d.heading}</em>
          </h2>
          <p className={styles.sub}>{d.sub}</p>
        </FadeUp>
        <div className={styles.right}>
          {d.pillars.map((p, i) => (
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
