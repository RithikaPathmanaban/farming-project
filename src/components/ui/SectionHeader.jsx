import { Badge } from './Badge'

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  dataAos = 'fade-up',
  ...props
}) {
  const alignClass = `text-${align}`

  return (
    <div
      className={`ui-section-header ${alignClass} ${className}`.trim()}
      data-aos={dataAos}
      {...props}
    >
      {badge && (
        <div className="ui-section-badge-wrap">
          <Badge variant="glass" icon={badgeIcon} dot={true}>
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className="ui-section-title">
          {highlight && title.includes(highlight) ? (
            <>
              {title.split(highlight)[0]}
              <em className="ui-title-accent">{highlight}</em>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </h2>
      )}

      {subtitle && (
        <p className="ui-section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  )
}
