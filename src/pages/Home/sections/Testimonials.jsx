import FadeUp from '../../../components/FadeUp/FadeUp'
import { StarAccent } from '../../../components/StarAccent/StarAccent'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { t } = useLanguage()
  const tm = t.testimonials

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUp className={styles.header}>
          <StarAccent size={36} opacity={0.5} className={styles.star} />
          <span className={`label ${styles.tag}`}>{tm.tag}</span>
          <h2 className={`heading-section ${styles.heading}`}><em>{tm.heading}</em></h2>
        </FadeUp>
        <div className={styles.grid}>
          {tm.items.map((item, i) => (
            <FadeUp key={i}>
              <div className={styles.card}>
                <div className={styles.stars}>{'★'.repeat(item.stars)}</div>
                <blockquote className={styles.quote}>"{item.quote}"</blockquote>
                <div className={styles.author}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
