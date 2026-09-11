import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpenId,
  className = '',
  ...props
}) {
  const [openIds, setOpenIds] = useState(() => {
    if (defaultOpenId) return [defaultOpenId]
    return []
  })

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={`ui-accordion ${className}`.trim()} {...props}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id || index)
        const itemId = item.id || index
        const Icon = item.icon

        return (
          <div
            key={itemId}
            className={`ui-accordion-item ${isOpen ? 'is-open' : ''}`}
          >
            <button
              type="button"
              className="ui-accordion-trigger"
              onClick={() => toggleItem(itemId)}
              aria-expanded={isOpen}
            >
              <div className="ui-accordion-trigger-left">
                {Icon && <Icon className="ui-accordion-icon" />}
                <span className="ui-accordion-title">{item.title}</span>
                {item.badge && (
                  <span className="ui-accordion-badge">{item.badge}</span>
                )}
              </div>

              <ChevronDown
                className={`ui-accordion-chevron ${isOpen ? 'is-rotated' : ''}`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`ui-accordion-collapse ${isOpen ? 'is-expanded' : ''}`}
              role="region"
            >
              <div className="ui-accordion-content">
                {typeof item.content === 'string' ? (
                  <p>{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
