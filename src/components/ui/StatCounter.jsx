import { useEffect, useRef, useState } from 'react'

export function StatCounter({
  value = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  label,
  description,
  icon: Icon,
  decimals = 0,
  className = '',
  ...props
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  const animateCount = () => {
    const start = performance.now()
    const target = Number(value) || 0

    const update = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = ease * target

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        setDisplayValue(target)
      }
    }

    requestAnimationFrame(update)
  }

  const formattedValue = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString()

  return (
    <div ref={containerRef} className={`ui-stat-counter ${className}`.trim()} {...props}>
      <div className="ui-stat-top-row">
        <div className="ui-stat-val-wrap">
          {prefix && <span className="ui-stat-prefix">{prefix}</span>}
          <span className="ui-stat-number">{formattedValue}</span>
          {suffix && <span className="ui-stat-suffix">{suffix}</span>}
        </div>
        {Icon && <Icon className="ui-stat-icon" />}
      </div>

      {label && <h4 className="ui-stat-label">{label}</h4>}
      {description && <p className="ui-stat-desc">{description}</p>}
    </div>
  )
}
