import { NavLink } from 'react-router-dom'
import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './ConditionsTeaser.module.css'

export default function ConditionsTeaser() {
  const { t } = useLanguage()
  const c = t.conditionsTeaser

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUp>
          <span className={`label ${styles.tag}`}>{c.tag}</span>
          <h2 className={`heading-section ${styles.heading}`}>{c.heading}</h2>
        </FadeUp>
        <FadeUp>
          <div className={styles.pills}>
            {c.pills.map(p => (
              <NavLink key={p} to="/conditions" className={styles.pill}>{p}</NavLink>
            ))}
          </div>
        </FadeUp>
        <FadeUp>
          <div className={styles.cta}>
            <Button href="/conditions" variant="cream">{c.seeAll}</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
