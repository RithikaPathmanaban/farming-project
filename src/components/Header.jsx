import { useEffect, useState } from 'react'
import { navigationItems, contactInfo } from '../content'
import { Leaf, ArrowUpRight, Menu, X, Phone, Palette } from 'lucide-react'

export function Header({ menuOpen, onToggleMenu, onNavigate, onOpenThemeModal }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`liquid-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="liquid-header-bar" data-aos="fade-down" data-aos-duration="600">
        <a className="liquid-brand" href="#top" aria-label="Thaiagam Group of Companies home">
          <span className="brand-mark-liquid">
            <Leaf className="brand-leaf-icon" />
          </span>
          <div className="brand-text-col">
            <span className="brand-name">THAIAGAM</span>
            <span className="brand-sub">GROUP OF COMPANIES · SINCE 1972</span>
          </div>
        </a>

        <div className="header-trust-chip">
          <span className="trust-dot" />
          <span>100% Eco-Friendly</span>
        </div>

        <nav id="primary-navigation" className={`liquid-nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navigationItems.map(([label, href]) => (
            <a
              href={href}
              onClick={onNavigate}
              key={href}
              className="liquid-nav-item"
            >
              <span>{label}</span>
              <span className="nav-hover-pill" />
            </a>
          ))}
          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="header-theme-btn"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem' }}
              onClick={() => {
                onNavigate?.()
                onOpenThemeModal?.()
              }}
            >
              <Palette className="w-4 h-4" />
              <span className="theme-btn-dot" />
              <span>Change Theme</span>
            </button>
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="mobile-drawer-phone"
              onClick={onNavigate}
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 {contactInfo.phones[0]}</span>
            </a>
            <a
              className="mobile-cta-btn button button-small"
              href="#contact"
              onClick={onNavigate}
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-theme-btn"
            onClick={onOpenThemeModal}
            title="Choose website theme"
            aria-label="Open Theme Studio"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="theme-btn-dot" />
            <span>Theme</span>
          </button>

          <a
            href={`tel:${contactInfo.phones[0]}`}
            className="header-phone-link"
            title={`Call Thaiagam: +91 ${contactInfo.phones[0]}`}
            aria-label={`Call Thaiagam: +91 ${contactInfo.phones[0]}`}
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span className="header-phone-text">{contactInfo.phones[0]}</span>
          </a>

          <a className="liquid-cta-btn" href="#contact">
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            className="liquid-menu-toggle"
            onClick={onToggleMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
