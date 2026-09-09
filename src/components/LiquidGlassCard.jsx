import { useRef, useEffect } from 'react'
import { animate } from 'animejs'

export function LiquidGlassCard({
  children,
  className = '',
  style = {},
  enableTilt = true,
  ...props
}) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)

      if (enableTilt && window.innerWidth >= 768) {
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const tiltX = ((y - centerY) / centerY) * -5
        const tiltY = ((x - centerX) / centerX) * 5

        animate(card, {
          rotateX: tiltX,
          rotateY: tiltY,
          duration: 300,
          ease: 'outQuad',
        })
      }
    }

    const handleMouseLeave = () => {
      card.style.removeProperty('--mouse-x')
      card.style.removeProperty('--mouse-y')

      if (enableTilt) {
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 600,
          ease: 'outElastic(1, .6)',
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enableTilt])

  return (
    <div
      ref={cardRef}
      className={`liquid-glass-card ${className}`}
      style={style}
      {...props}
    >
      <div className="liquid-glass-sheen" aria-hidden="true" />
      <div className="liquid-glass-content">{children}</div>
    </div>
  )
}
