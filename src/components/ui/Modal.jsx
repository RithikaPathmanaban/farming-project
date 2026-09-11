import { useEffect } from 'react'
import { X } from 'lucide-react'

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = 'md', // 'sm' | 'md' | 'lg' | 'full'
  className = '',
  showClose = true,
  ...props
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose && onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="ui-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      {...props}
    >
      <div
        className={`ui-modal-panel ui-modal-${size} ${className}`.trim()}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showClose) && (
          <div className="ui-modal-header">
            <div className="ui-modal-title-wrap">
              {title && <h3 className="ui-modal-title">{title}</h3>}
              {subtitle && <p className="ui-modal-subtitle">{subtitle}</p>}
            </div>

            {showClose && (
              <button
                type="button"
                className="ui-modal-close-btn"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        <div className="ui-modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}
