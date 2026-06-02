import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './BookCTA.module.css'

export default function BookCTA() {
  const { t } = useLanguage()
  const c = t.bookCta

  return (
    <section className={styles.section}>
      <div className="container">
        <FadeUp className={styles.inner}>
          <h2 className={`heading-section ${styles.heading}`}>{c.heading}</h2>
          <p className={styles.sub}>{c.sub}</p>
          <div className={styles.actions}>
            <Button href="https://wa.link/bddr6y" variant="cream">{c.btn}</Button>
            <span className={styles.handle}>@tpr_rehabreimagined</span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
