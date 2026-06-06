export function StarAccent({ size = 40, color = '#B1D082', opacity = 0.7, rotation = 0, className = '', style = {} }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 40 40" fill="none"
      aria-hidden="true" focusable="false" className={className}
      style={{ transform: `rotate(${rotation}deg)`, opacity, pointerEvents: 'none', ...style }}
    >
      <line x1="20" y1="3" x2="20" y2="37" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="3" y1="20" x2="37" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}
