import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

export const Button = forwardRef(function Button(
  {
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'right',
    isLoading = false,
    disabled = false,
    href,
    target,
    rel,
    type = 'button',
    ...props
  },
  ref
) {
  const baseClasses = 'ui-btn'
  const variantClass = `ui-btn-${variant}`
  const sizeClass = `ui-btn-${size}`
  const loadingClass = isLoading ? 'is-loading' : ''
  const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${loadingClass} ${className}`.trim()

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin ui-btn-spinner" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 ui-btn-icon ui-btn-icon-left" />
      )}
      {children && <span className="ui-btn-text">{children}</span>}
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ui-btn-icon ui-btn-icon-right" />
      )}
    </>
  )

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  )
})
