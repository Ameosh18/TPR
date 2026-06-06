import FadeUp from '../../../components/FadeUp/FadeUp'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './TPRDifference.module.css'

const icons = ['◎', '◈', '◉']

export default function TPRDifference() {
  const { t } = useLanguage()
  const d = t.difference

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUp className={styles.header}>
          <span className={styles.label}>{d.tag}</span>
          <h2 className={styles.heading}><em>{d.heading}</em></h2>
          <p className={styles.sub}>{d.sub}</p>
        </FadeUp>
        <div className={styles.grid}>
          {d.pillars.map((p, i) => (
            <FadeUp key={i}>
              <div className={styles.card}>
                <div className={styles.iconCircle}>
                  <span className={styles.iconGlyph}>{i + 1}</span>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardBody}>{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
