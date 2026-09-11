export function Badge({
  children,
  className = '',
  variant = 'glass',
  size = 'md',
  icon: Icon,
  dot = false,
  dotColor,
  ...props
}) {
  const baseClasses = 'ui-badge'
  const variantClass = `ui-badge-${variant}`
  const sizeClass = `ui-badge-${size}`
  const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()

  return (
    <span className={combinedClasses} {...props}>
      {dot && (
        <span
          className="ui-badge-dot"
          style={dotColor ? { backgroundColor: dotColor, boxShadow: `0 0 8px ${dotColor}` } : undefined}
          aria-hidden="true"
        />
      )}
      {Icon && <Icon className="ui-badge-icon" aria-hidden="true" />}
      <span className="ui-badge-text">{children}</span>
    </span>
  )
}
