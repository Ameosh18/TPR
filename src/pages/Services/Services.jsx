import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { services } from '../../data/services'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>What we offer</span>
            <h1 className={`heading-display ${styles.headline}`}>Every treatment starts with listening.</h1>
            <p className={styles.sub}>We don't have a standard package. We have a standard of care — and then we build your plan from there.</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((s, i) => (
              <FadeUp key={i}>
                <div className={`card-hover ${styles.card}`}>
                  <span className={styles.icon}>{s.icon}</span>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardHead}>{s.title}</h3>
                    <p className={styles.cardBody}>{s.description}</p>
                    <span className={styles.duration}>⏱ {s.duration}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className={styles.note}>
              <p>Pricing is available on request. We believe treatment decisions shouldn't be driven by a price list — they should be driven by what your body needs.</p>
              <Button href="https://wa.link/bddr6y" variant="primary">Ask about pricing →</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
