import styles from './Button.module.css'

export default function Button({ variant = 'primary', href, children, onClick, className = '', type = 'button' }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`
  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
