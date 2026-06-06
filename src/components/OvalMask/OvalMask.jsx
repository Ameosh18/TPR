import styles from './OvalMask.module.css'

export function OvalMask({ src, alt = '', size = 'md', bordered = false, className = '' }) {
  const cls = [
    styles.oval,
    styles[`oval--${size}`],
    bordered ? styles['oval--bordered'] : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={cls}>
      {src
        ? <img src={src} alt={alt} />
        : <div className={styles.placeholder} aria-hidden="true" />
      }
    </div>
  )
}
