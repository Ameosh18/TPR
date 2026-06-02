import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Button from '../../components/Button/Button'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()
  const c = t.contactPage

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>{c.heroTag}</span>
            <h1 className={`heading-display ${styles.headline}`}>{c.heroHead}</h1>
            <p className={styles.sub}>{c.heroSub}</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            <FadeUp className={styles.formWrap}>
              {sent ? (
                <div className={styles.thanks}>
                  <span className={styles.thanksIcon}>{c.thanksIcon}</span>
                  <h2 className={styles.thanksHead}>{c.thanksHead}</h2>
                  <p className={styles.thanksSub}>{c.thanksSub}</p>
                  <Button href="https://wa.link/bddr6y" variant="primary">{c.thanksBtn}</Button>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.form}>
                  <h2 className={styles.formHead}>{c.formHead}</h2>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name">{c.labelName}</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handle} placeholder={c.placeholderName} />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">{c.labelPhone}</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handle} placeholder={c.placeholderPhone} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">{c.labelEmail}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder={c.placeholderEmail} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="reason">{c.labelReason}</label>
                    <select id="reason" name="reason" value={form.reason} onChange={handle}>
                      <option value="">{c.placeholderReason}</option>
                      {c.reasons.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="message">{c.labelMessage}</label>
                    <textarea id="message" name="message" rows="4" value={form.message} onChange={handle} placeholder={c.placeholderMessage} />
                  </div>
                  <Button type="submit" variant="primary">{c.submitBtn}</Button>
                  <p className={styles.reassurance}>{c.reassurance}</p>
                </form>
              )}
            </FadeUp>

            <FadeUp className={styles.details}>
              <div className={styles.detailBlock}>
                <h3 className={styles.detailHead}>{c.detailsHead}</h3>
                <p className={styles.detailItem}>{c.address}</p>
                <p className={styles.detailItem}>{c.phone}</p>
                <p className={styles.detailItem}>{c.email}</p>
                <p className={styles.detailItem}>{c.hours}</p>
              </div>
              <div className={styles.detailBlock}>
                <h4 className={styles.subHead}>{c.whatsappHead}</h4>
                <Button href="https://wa.link/bddr6y" variant="primary">{c.whatsappBtn}</Button>
              </div>
              <div className={styles.detailBlock}>
                <h4 className={styles.subHead}>{c.followHead}</h4>
                <a href="https://www.instagram.com/tpr_rehabreimagined" target="_blank" rel="noopener noreferrer" className={styles.instagram}>
                  {c.instagram}
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
