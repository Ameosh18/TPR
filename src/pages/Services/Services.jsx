import { ClockIcon } from '@heroicons/react/24/outline'
import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import { iconMap } from '../../utils/iconMap'
import styles from './Services.module.css'

export default function Services() {
  const { t } = useLanguage()
  const s = t.servicesPage

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>{s.heroTag}</span>
            <h1 className={`heading-display ${styles.headline}`}>{s.heroHead}</h1>
            <p className={styles.sub}>{s.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {s.services.map((svc, i) => {
              const Icon = iconMap[svc.icon]
              return (
                <FadeUp key={i}>
                  <div className={`card-hover ${styles.card}`}>
                    {Icon && <Icon className={styles.icon} />}
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardHead}>{svc.title}</h3>
                      <p className={styles.cardBody}>{svc.description}</p>
                      <span className={styles.duration}>
                        <ClockIcon className={styles.clockIcon} />
                        {svc.duration}
                      </span>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
          <FadeUp>
            <div className={styles.note}>
              <p>{s.noteText}</p>
              <Button href="https://wa.link/bddr6y" variant="primary">{s.noteBtn}</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
