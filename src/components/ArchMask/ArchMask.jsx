import styles from './ArchMask.module.css'

/* Arch-shaped image mask — the site's visual signature.
   Flat bottom, rounded arch top. Echoes the TPR logo arch form.
   size: 'lg' | 'md' | 'sm' | 'xs'
   bordered: adds thin brand-green outline ring */
export function ArchMask({ src, alt = '', size = 'md', bordered = false, className = '' }) {
  const cls = [
    styles.mask,
    styles[`mask--${size}`],
    bordered ? styles['mask--bordered'] : '',
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
