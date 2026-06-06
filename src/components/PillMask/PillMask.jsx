import styles from './PillMask.module.css'

export function PillMask({ src, alt = '', size = 'md', className = '' }) {
  const cls = [styles.pill, styles[`pill--${size}`], className].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      {src
        ? <img src={src} alt={alt} />
        : <div className={styles.placeholder} aria-hidden="true" />
      }
    </div>
  )
}
