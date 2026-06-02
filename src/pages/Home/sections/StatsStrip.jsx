import styles from './StatsStrip.module.css'

const stats = [
  { number: '9+', label: 'Years of Clinical Experience' },
  { number: '1K+', label: 'Patients Treated Successfully' },
  { number: '15+', label: 'Specialised Therapy Programs' },
  { number: '100%', label: 'Patient Satisfaction Rate' },
]

export default function StatsStrip() {
  return (
    <section className={styles.strip}>
      <div className={`container ${styles.grid}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.number}>{s.number}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
