import { NavLink } from 'react-router-dom'
import FadeUp from '../../../components/FadeUp/FadeUp'
import Button from '../../../components/Button/Button'
import { StarAccent } from '../../../components/StarAccent/StarAccent'
import { useLanguage } from '../../../contexts/LanguageContext'
import styles from './ConditionsTeaser.module.css'

export default function ConditionsTeaser() {
  const { t } = useLanguage()
  const c = t.conditionsTeaser

  return (
    <section className={`section ${styles.section}`}>
      <div className="container" style={{ position: 'relative' }}>
        <StarAccent size={48} opacity={0.25} rotation={15} style={{ position: 'absolute', top: -20, right: 0, pointerEvents: 'none' }} />
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
            <a href="/conditions" className={styles.seeAll}>{c.seeAll}</a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
