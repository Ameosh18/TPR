import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import styles from './Contact.module.css'

const reasons = ['Back / Neck Pain', 'Sports Injury', 'Post-surgical Rehab', 'Posture Correction', 'Shoulder / Hip / Knee', 'Not sure yet', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>Book a consultation</span>
            <h1 className={`heading-display ${styles.headline}`}>Let's get you moving again.</h1>
            <p className={styles.sub}>Fill in the form below and Dr. Oshin will get back to you within 24 hours — usually sooner.</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            <FadeUp className={styles.formWrap}>
              {sent ? (
                <div className={styles.thanks}>
                  <span className={styles.thanksIcon}>✓</span>
                  <h2 className={styles.thanksHead}>Request received.</h2>
                  <p className={styles.thanksSub}>Dr. Oshin will be in touch within 24 hours. No pressure — just a conversation.</p>
                  <Button href="https://wa.link/bddr6y" variant="primary">Or reach out on WhatsApp</Button>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.form}>
                  <h2 className={styles.formHead}>Send your request</h2>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name">Full name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handle} placeholder="Rahul Mehta" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handle} placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder="rahul@example.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="reason">Reason for visit</label>
                    <select id="reason" name="reason" value={form.reason} onChange={handle}>
                      <option value="">Select a reason</option>
                      {reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="message">Message (optional)</label>
                    <textarea id="message" name="message" rows="4" value={form.message} onChange={handle} placeholder="Tell us a bit about what you're dealing with..." />
                  </div>
                  <Button type="submit" variant="primary">Send my request</Button>
                  <p className={styles.reassurance}>We'll get back to you within 24 hours. No pressure, no pushy sales.</p>
                </form>
              )}
            </FadeUp>

            <FadeUp className={styles.details}>
              <div className={styles.detailBlock}>
                <h3 className={styles.detailHead}>The Physio Room</h3>
                <p className={styles.detailItem}>📍 Kothrud, Pune, Maharashtra</p>
                <p className={styles.detailItem}>📞 +91 98765 43210</p>
                <p className={styles.detailItem}>✉️ hello@thephysioroom.in</p>
                <p className={styles.detailItem}>🕐 Mon–Sat, 10am–7pm</p>
              </div>
              <div className={styles.detailBlock}>
                <h4 className={styles.subHead}>Or message us directly</h4>
                <Button href="https://wa.link/bddr6y" variant="primary">Chat on WhatsApp</Button>
              </div>
              <div className={styles.detailBlock}>
                <h4 className={styles.subHead}>Follow along</h4>
                <a href="https://www.instagram.com/tpr_rehabreimagined" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
                  @tpr_rehabreimagined on Instagram
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
