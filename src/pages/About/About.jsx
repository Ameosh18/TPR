import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './About.module.css'

export default function About() {
  const { t } = useLanguage()
  const a = t.aboutPage

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp className={styles.heroContent}>
            <span className={`label ${styles.tag}`}>{a.heroTag}</span>
            <h1 className={`heading-display ${styles.heroQuote}`}>
              <em>{a.heroQuote}</em>
            </h1>
            <p className={styles.heroCreds}>{a.heroCreds}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.story}`}>
        <div className="container-sm">
          <FadeUp>
            <span className={`label ${styles.storyTag}`}>{a.storyTag}</span>
            <h2 className={`heading-section ${styles.storyHead}`}>{a.storyHead}</h2>
          </FadeUp>
          <FadeUp>
            {a.story.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.storyTag}`}>{a.timelineTag}</span>
            <h2 className={`heading-section ${styles.storyHead}`}>{a.timelineHead}</h2>
          </FadeUp>
          <div className={styles.timeline}>
            {a.timeline.map((item, i) => (
              <FadeUp key={i}>
                <div className={styles.timelineItem}>
                  <span className={styles.year}>{item.year}</span>
                  <div className={styles.line} />
                  <p className={styles.timelineEvent}>{item.event}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.philSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.tag}`}>{a.philTag}</span>
            <h2 className={`heading-section ${styles.storyHead}`}>{a.philHead}</h2>
          </FadeUp>
          <div className={styles.pillars}>
            {a.pillars.map((p, i) => (
              <FadeUp key={i}>
                <div className={styles.pillarCard}>
                  <h3 className={styles.pillarHead}>{p.title}</h3>
                  <p className={styles.pillarBody}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeUp className={styles.ctaInner}>
            <h2 className={`heading-section ${styles.ctaHead}`}>{a.ctaHead}</h2>
            <Button href="https://wa.link/bddr6y" variant="primary">{a.ctaBtn}</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
