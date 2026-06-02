import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { faqs } from '../../data/faq'
import styles from './Process.module.css'

const steps = [
  { num: '01', title: 'We listen', desc: 'A full history — not a checkbox intake. We want to understand your life, your work, your movement patterns, and how long this has been affecting you. There\'s no clock running.' },
  { num: '02', title: 'We watch you move', desc: 'A movement screen and postural assessment. Your body tells us a great deal before any hands-on work begins. We look for what\'s compensating, not just what\'s symptomatic.' },
  { num: '03', title: 'We find the root cause', desc: 'Not just the painful spot — the reason it\'s happening. A tight neck is rarely the problem. What\'s driving the tightness is what we\'re after.' },
  { num: '04', title: 'We explain everything', desc: 'You leave the first session knowing exactly why it hurts, what\'s involved, and what the path forward looks like. No mystery diagnoses, no jargon, no vague reassurances.' },
  { num: '05', title: 'We build your plan', desc: 'Session count, home program, realistic milestones. A timeline that accounts for your schedule, your sport, your job, your life — not just a clinical ideal.' },
]

export default function Process() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>What to expect</span>
            <h1 className={`heading-display ${styles.headline}`}>Here's exactly what to expect.</h1>
            <p className={styles.sub}>We believe transparency is part of good care. No surprises — just clarity.</p>
          </FadeUp>
        </div>
      </section>

      {/* Before you arrive */}
      <section className={`section ${styles.before}`}>
        <div className="container">
          <FadeUp>
            <h2 className={`heading-section ${styles.sectionHead}`}>Before you arrive</h2>
          </FadeUp>
          <FadeUp>
            <div className={styles.beforeGrid}>
              <div className={styles.beforeItem}><span>👕</span><p>Wear loose, comfortable clothing. For lower body: shorts. For upper body: a loose t-shirt.</p></div>
              <div className={styles.beforeItem}><span>📋</span><p>Bring any previous reports, scan results, or referral letters you have — but don't worry if you don't.</p></div>
              <div className={styles.beforeItem}><span>📍</span><p>We're in Kothrud, Pune. Parking is available. Exact directions will be sent after booking.</p></div>
              <div className={styles.beforeItem}><span>⏱</span><p>Plan for 60 minutes for your first session. Follow-ups are typically 45 minutes.</p></div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <FadeUp>
            <span className={`label ${styles.tag2}`}>The first session</span>
            <h2 className={`heading-section ${styles.sectionHead}`}>How the first visit works</h2>
          </FadeUp>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <FadeUp key={i}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div>
                    <h3 className={styles.stepHead}>{s.title}</h3>
                    <p className={styles.stepBody}>{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <FadeUp>
            <h2 className={`heading-section ${styles.sectionHead}`}>Common questions</h2>
          </FadeUp>
          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <FadeUp key={i}>
                <div className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                  <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className={styles.chevron}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className={styles.faqA}>
                    <p>{item.a}</p>
                  </div>
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
            <h2 className={`heading-section ${styles.ctaHead}`}>Still have questions? Ask Dr. Oshin directly.</h2>
            <Button href="https://wa.link/bddr6y" variant="cream">Message on WhatsApp</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
