import styles from './SectionWrapper.module.css'

export default function SectionWrapper({ children, bg, className = '', small = false }) {
  return (
    <section
      className={`${small ? 'section-sm' : 'section'} ${styles.wrapper} ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      <div className="container">
        {children}
      </div>
    </section>
  )
}
