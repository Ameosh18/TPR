import { useState } from 'react'
import FadeUp from '../../components/FadeUp/FadeUp'
import Tag from '../../components/Tag/Tag'
import Button from '../../components/Button/Button'
import { conditions, categories } from '../../data/conditions'
import styles from './Conditions.module.css'

export default function Conditions() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? conditions : conditions.filter(c => c.category === active)

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <FadeUp>
            <span className={`label ${styles.tag}`}>What we treat</span>
            <h1 className={`heading-display ${styles.headline}`}>Conditions we treat</h1>
            <p className={styles.sub}>From acute injuries to chronic pain that's been dismissed for years — we work with the full spectrum.</p>
          </FadeUp>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <FadeUp>
            <div className={styles.filters}>
              {categories.map(cat => (
                <Tag key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
              ))}
            </div>
          </FadeUp>
          <div className={styles.grid}>
            {filtered.map((c, i) => (
              <FadeUp key={c.name}>
                <div className={`card-hover ${styles.card}`}>
                  <span className={styles.catBadge}>{c.category}</span>
                  <h3 className={styles.cardHead}>{c.name}</h3>
                  <p className={styles.cardBody}>{c.description}</p>
                  <Button href="/contact" variant="ghost" className={styles.cardCta}>Book for this →</Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
