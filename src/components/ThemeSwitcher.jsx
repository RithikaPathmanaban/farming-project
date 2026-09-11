import { useEffect, useState } from 'react'
import { Palette, Check, Sparkles, X, RotateCcw } from 'lucide-react'

export const THEMES = [
  {
    id: 'emerald',
    name: 'Green & Gold',
    tag: 'Green + Gold',
    desc: 'Dark forest green background with warm gold & green accents.',
    swatches: ['#071914', '#0c261e', '#efc86d'],
  },
  {
    id: 'terra',
    name: 'Brown & Orange',
    tag: 'Brown + Orange',
    desc: 'Earthy dark brown background with warm terracotta orange accents.',
    swatches: ['#18110c', '#271b14', '#f09a5b'],
  },
  {
    id: 'cyber-sprout',
    name: 'Black & Mint Green',
    tag: 'Black + Mint',
    desc: 'Sleek black background with bright mint green & cyan accents.',
    swatches: ['#0a0e14', '#111822', '#00f59b'],
  },
  {
    id: 'golden-harvest',
    name: 'Amber & Orange',
    tag: 'Amber + Orange',
    desc: 'Warm charcoal background with amber honey & golden yellow accents.',
    swatches: ['#1a1309', '#2a1e0f', '#fbb034'],
  },
  {
    id: 'ocean-coast',
    name: 'Navy Blue & Teal',
    tag: 'Blue + Teal',
    desc: 'Deep navy blue background with ocean teal & cyan blue accents.',
    swatches: ['#08141e', '#0f2231', '#38bdf8'],
  },
  {
    id: 'royal-amethyst',
    name: 'Purple & Violet',
    tag: 'Purple + Violet',
    desc: 'Deep dark purple background with bright violet & rose pink accents.',
    swatches: ['#140d1e', '#221633', '#c084fc'],
  },
  {
    id: 'nordic-sage',
    name: 'Dark Grey & Sage Green',
    tag: 'Grey + Sage',
    desc: 'Dark slate grey background with clean sage green accents.',
    swatches: ['#0d1715', '#162522', '#6ee7b7'],
  },
  {
    id: 'coir-craft',
    name: 'Coffee Brown & Sand',
    tag: 'Brown + Sand',
    desc: 'Dark coffee brown background with natural sand gold accents.',
    swatches: ['#181512', '#26201a', '#e5b869'],
  },
]

export const STORAGE_KEY = 'thaiagam_theme'

export function useThemeState() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'emerald'
    } catch {
      return 'emerald'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    try {
      localStorage.setItem(STORAGE_KEY, currentTheme)
    } catch {
      // Safe fallback if local storage is restricted
    }
  }, [currentTheme])

  return [currentTheme, setCurrentTheme]
}

export function ThemeModal({ isOpen, onClose, currentTheme, onSelectTheme }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
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

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0]

  return (
    <div
      className="theme-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="theme-studio-title"
    >
      <div
        className="theme-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="theme-modal-header">
          <div className="theme-modal-title-group">
            <span className="theme-modal-badge">
              <Sparkles className="w-3.5 h-3.5" /> Color Themes
            </span>
            <h2 id="theme-studio-title" className="theme-modal-title">
              Select Color Theme
            </h2>
            <p className="theme-modal-subtitle">
              Choose your preferred color combination for the website.
            </p>
          </div>

          <button
            className="theme-modal-close-btn"
            onClick={onClose}
            aria-label="Close Theme Studio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="theme-studio-grid">
          {THEMES.map((theme) => {
            const isActive = theme.id === currentTheme
            return (
              <button
                key={theme.id}
                type="button"
                className={`theme-card-option ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelectTheme(theme.id)}
              >
                <div className="theme-card-header">
                  <div className="theme-swatches-strip" title="Palette Swatches">
                    {theme.swatches.map((color, idx) => (
                      <span
                        key={idx}
                        className="theme-swatch-circle"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {isActive && (
                    <span className="theme-card-active-check">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>

                <div className="theme-card-body">
                  <span className="theme-card-tag">{theme.tag}</span>
                  <div className="theme-card-name">
                    {theme.name}
                  </div>
                  <p className="theme-card-desc">{theme.desc}</p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="theme-modal-footer">
          <div className="theme-modal-footer-note">
            Active: <strong>{activeThemeObj.name}</strong> · Saved automatically
          </div>

          <button
            type="button"
            className="theme-reset-btn"
            onClick={() => onSelectTheme('emerald')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default (Green & Gold)</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export function FloatingThemeTrigger({ onClick, currentTheme }) {
  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0]

  return (
    <button
      type="button"
      className="floating-theme-trigger"
      onClick={onClick}
      aria-label="Open Theme Studio to switch colors"
      title={`Theme: ${activeTheme.name}. Click to change.`}
    >
      <Palette className="w-4 h-4" />
      <span className="theme-btn-dot" />
      <span>Theme</span>
    </button>
  )
}
