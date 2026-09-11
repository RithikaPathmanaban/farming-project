import { useEffect, useState } from 'react'
import { Palette, Check, Sparkles, X, RotateCcw } from 'lucide-react'

export const THEMES = [
  {
    id: 'emerald',
    name: 'Emerald Heritage',
    tag: 'Original 1972 Signature',
    desc: 'Lush natural forest green with warm gold & vibrant sprout accents.',
    aesthetic: 'Balanced Organic · 24px Curve · Grotesk',
    swatches: ['#071914', '#0c261e', '#efc86d'],
  },
  {
    id: 'terra',
    name: 'Terra Earth & Clay',
    tag: 'Warm Agriculture & Husk',
    desc: 'Rich coconut husk umber with terracotta earth & copper sun highlights.',
    aesthetic: 'Earthy Warmth · 22px Curve · Editorial Serif',
    swatches: ['#18110c', '#271b14', '#f09a5b'],
  },
  {
    id: 'cyber-sprout',
    name: 'Midnight Cyber Sprout',
    tag: 'Modern Agritech & Precision',
    desc: 'Deep obsidian dark mode with coordinate grid mesh, electric mint & cyan aurora.',
    aesthetic: 'High-Tech Grid · 8px Chamfer · Tech Grotesk',
    swatches: ['#0a0e14', '#111822', '#00f59b'],
  },
  {
    id: 'golden-harvest',
    name: 'Golden Sunset & Harvest',
    tag: 'Golden Hour Sun-Cured',
    desc: 'Warm charcoal dusk with amber honey glow & sun-cured harvest tones.',
    aesthetic: 'Sunlit Rays · 22px Curve · Bold Grotesk',
    swatches: ['#1a1309', '#2a1e0f', '#fbb034'],
  },
  {
    id: 'ocean-coast',
    name: 'Ocean Coast & Marine',
    tag: 'Maritime Coir Export',
    desc: 'Deep nautical ocean navy with sea foam teal & luminous sky aqua waves.',
    aesthetic: 'Fluid Waves · 26px Pebble · Modern Sans',
    swatches: ['#08141e', '#0f2231', '#38bdf8'],
  },
  {
    id: 'royal-amethyst',
    name: 'Royal Amethyst & Orchid',
    tag: 'Luxury Botanical Elegance',
    desc: 'Midnight imperial violet with radiant orchid & warm champagne rose.',
    aesthetic: 'Regal Velvet · 20px Curve · Luxury Serif',
    swatches: ['#140d1e', '#221633', '#c084fc'],
  },
  {
    id: 'nordic-sage',
    name: 'Nordic Sage & Frost',
    tag: 'Pristine Eco Botanical',
    desc: 'Crisp minimal slate pine with frosted mint sage & glacial teal.',
    aesthetic: 'Frosted Glass · 30px Pebble · Clean Sans',
    swatches: ['#0d1715', '#162522', '#6ee7b7'],
  },
  {
    id: 'coir-craft',
    name: 'Coir Craft & Raw Flax',
    tag: 'Artisan Twisted Rope',
    desc: 'Espresso undertones with raw spun flaxen gold & woven coir bronze.',
    aesthetic: 'Artisan Workshop · 18px Curve · Heritage Serif',
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
              <Sparkles className="w-3.5 h-3.5" /> Atmospheric Combinations
            </span>
            <h2 id="theme-studio-title" className="theme-modal-title">
              Theme Studio
            </h2>
            <p className="theme-modal-subtitle">
              Choose from 8 curated atmospheric combination themes tailored for Thaiagam Group.
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
                  <div className="theme-card-tag-row">
                    <span className="theme-card-tag">{theme.tag}</span>
                    <span className="theme-card-aesthetic-badge">{theme.aesthetic}</span>
                  </div>
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
            Active: <strong>{activeThemeObj.name}</strong> · Choice saved automatically
          </div>

          <button
            type="button"
            className="theme-reset-btn"
            onClick={() => onSelectTheme('emerald')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
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
