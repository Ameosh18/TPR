import useFadeUp from '../../hooks/useFadeUp'

export default function FadeUp({ children, className = '' }) {
  const ref = useFadeUp()
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  )
}
