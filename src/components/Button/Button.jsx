import styles from './Button.module.css'

export default function Button({ variant = 'primary', href, children, onClick, className = '', type = 'button', icon = null, external = false }) {
  const cls = [styles.btn, styles[`btn--${variant}`], className].filter(Boolean).join(' ')
  const externalProps = (external || (href && href.startsWith('http'))) ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (href) {
    return (
      <a href={href} className={cls} {...externalProps}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  )
}
