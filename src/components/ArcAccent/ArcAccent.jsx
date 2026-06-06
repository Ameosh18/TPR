/* Decorative arc accents — echoes the logo arch form.
   Always aria-hidden, pointer-events: none, position: absolute. */

export function ArcAccent({ size = 80, rotation = 0, opacity = 0.6, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, opacity, pointerEvents: 'none', ...style }}
    >
      <path
        d="M 10 70 Q 10 10 70 10"
        stroke="#B1D082"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function ArcAccentDouble({ size = 100, rotation = 0, opacity = 0.5, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ transform: `rotate(${rotation}deg)`, opacity, pointerEvents: 'none', ...style }}
    >
      <path d="M 15 85 Q 15 15 85 15" stroke="#B1D082" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 25 85 Q 25 25 85 25" stroke="#B1D082" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
