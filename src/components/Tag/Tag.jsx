import styles from './Tag.module.css'

export default function Tag({ label, onClick, active = false }) {
  return (
    <span
      className={`${styles.tag} ${active ? styles.active : ''} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
    >
      {label}
    </span>
  )
}
