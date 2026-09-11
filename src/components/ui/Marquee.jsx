export function Marquee({
  children,
  speed = 30, // seconds
  direction = 'left',
  pauseOnHover = true,
  className = '',
  gradientFade = true,
  ...props
}) {
  const dirClass = direction === 'right' ? 'marquee-reverse' : ''
  const pauseClass = pauseOnHover ? 'pause-on-hover' : ''

  return (
    <div
      className={`ui-marquee-wrapper ${pauseClass} ${className}`.trim()}
      {...props}
    >
      {gradientFade && <div className="ui-marquee-fade-left" aria-hidden="true" />}

      <div
        className={`ui-marquee-track ${dirClass}`}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        <div className="ui-marquee-group">{children}</div>
        <div className="ui-marquee-group" aria-hidden="true">{children}</div>
      </div>

      {gradientFade && <div className="ui-marquee-fade-right" aria-hidden="true" />}
    </div>
  )
}
