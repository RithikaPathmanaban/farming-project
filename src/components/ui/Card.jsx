import { forwardRef, useRef } from 'react'

export const Card = forwardRef(function Card(
  {
    children,
    className = '',
    enableTilt = true,
    hoverGlow = true,
    variant = 'glass', // 'glass' | 'solid' | 'flat' | 'outline'
    onClick,
    ...props
  },
  forwardedRef
) {
  const innerRef = useRef(null)
  const cardRef = forwardedRef || innerRef

  const handleMouseMove = (e) => {
    if (!enableTilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  const baseClasses = 'ui-card'
  const variantClass = `ui-card-${variant}`
  const glowClass = hoverGlow ? 'has-hover-glow' : ''
  const combinedClasses = `${baseClasses} ${variantClass} ${glowClass} ${className}`.trim()

  return (
    <div
      ref={cardRef}
      className={combinedClasses}
      onMouseMove={enableTilt ? handleMouseMove : undefined}
      onClick={onClick}
      {...props}
    >
      <div className="ui-card-sheen" aria-hidden="true" />
      <div className="ui-card-content-wrap">
        {children}
      </div>
    </div>
  )
})

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`ui-card-header ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', as: Component = 'h3', ...props }) {
  return (
    <Component className={`ui-card-title ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`ui-card-description ${className}`.trim()} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`ui-card-body ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`ui-card-footer ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
