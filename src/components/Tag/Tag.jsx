import styles from './Tag.module.css'

export default function Tag({ label, onClick, active = false }) {
  if (onClick) {
    return (
      <button
        type="button"
        className={`${styles.tag} ${styles.clickable} ${active ? styles.active : ''}`}
        onClick={onClick}
        aria-pressed={active}
      >
        {label}
      </button>
    )
  }
  return (
    <span className={`${styles.tag} ${active ? styles.active : ''}`}>
      {label}
    </span>
  )
}
