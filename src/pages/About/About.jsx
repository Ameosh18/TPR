import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import styles from './About.module.css'

const timeline = [
  { year: '2010', event: 'BPT graduation — DY Patil College of Physiotherapy, Pune' },
  { year: '2011', event: 'Clinical internship — Ruby Hall Clinic, Pune' },
  { year: '2013', event: 'Certified in Manual Therapy & Myofascial Release' },
  { year: '2015', event: 'Advanced certification in Dry Needling' },
  { year: '2016', event: 'Founded The Physio Room, Kothrud, Pune' },
  { year: 'Present', event: '9+ years clinical experience · 1,000+ patients treated' },
]

const pillars = [
  {
    title: 'Evidence-based care in practice',
    body: 'At TPR, evidence-based care means every technique we use has a body of clinical research behind it. We follow current guidelines, update our protocols when the research moves, and we never default to habit or tradition when the science points elsewhere. In practice, this means Dr. Oshin regularly reviews published research and applies it to individual cases — not to a generic treatment template.',
  },
  {
    title: 'What tailored treatment actually looks like',
    body: 'Two patients walk in with the same diagnosis — lower back pain, say. One is a 28-year-old software engineer who sits for 10 hours a day. The other is a 54-year-old whose pain flares after gardening. Same label, completely different drivers. Their treatment plans will look nothing alike. We build around your life, not your MRI.',
  },
  {
    title: 'What "never rushed" means in a session',
    body: 'The initial assessment is 60 minutes — always. We use that time to take a full history, watch you move, and explain what we\'ve found before a single treatment starts. Follow-up sessions are structured but never rushed. You\'ll always know what we\'re doing and why. And you\'ll always leave with a clear understanding of your progress.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp className={styles.heroContent}>
            <span className={`label ${styles.tag}`}>About Dr. Oshin</span>
            <h1 className={`heading-display ${styles.heroQuote}`}>
              <em>"The most important thing I do in any session isn't the manual therapy — it's the listening."</em>
            </h1>
            <p className={styles.heroCreds}>Dr. Oshin Ninawe Kulkarni · BPT · Founder, The Physio Room</p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`}>
        <div className="container-sm">
          <FadeUp>
            <span className={`label ${styles.storyTag}`}>Her story</span>
            <h2 className={`heading-section ${styles.storyHead}`}>Why she started TPR</h2>
          </FadeUp>
          <FadeUp>
            <p className={styles.para}>
              Dr. Oshin Ninawe Kulkarni grew up watching people manage pain as though it were inevitable — something to endure rather than resolve. It wasn't until she began her physiotherapy training that she understood how much of that suffering was preventable, and how rarely patients were given the tools to actually understand what was happening in their bodies.
            </p>
            <p className={styles.para}>
              After graduating from DY Patil College of Physiotherapy and spending her early career across hospital and outpatient settings in Pune, she saw a pattern. Patients would come in, get a generic exercise sheet, and leave without understanding why they were in pain in the first place. Many came back months later with the same problem. The system wasn't built around outcomes — it was built around throughput.
            </p>
            <p className={styles.para}>
              The Physio Room was her answer to that. A clinic built on the conviction that if you understand your body — really understand it — you heal differently. More completely. More permanently.
            </p>
            <p className={styles.para}>
              She opened TPR in Kothrud in 2016 with a single treatment room and a clear principle: no patient leaves without understanding why they hurt and what the plan is. That principle hasn't changed.
            </p>
            <p className={styles.para}>
              Today, she works with desk workers, athletes, seniors, and post-surgical patients — anyone whose body is asking for more careful attention than it's been given. She specialises in manual therapy, sports rehabilitation, and postural correction, and brings the same unhurried focus to every session.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.storyTag}`}>Education & credentials</span>
            <h2 className={`heading-section ${styles.storyHead}`}>The path to TPR</h2>
          </FadeUp>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
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

      {/* Philosophy */}
      <section className={`section ${styles.philSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.tag}`}>Philosophy</span>
            <h2 className={`heading-section ${styles.storyHead}`}>How we think about treatment</h2>
          </FadeUp>
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
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

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <FadeUp className={styles.ctaInner}>
            <h2 className={`heading-section ${styles.ctaHead}`}>Ready to experience physio that actually listens?</h2>
            <Button href="https://wa.link/bddr6y" variant="primary">Book a Consultation</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
