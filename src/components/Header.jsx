import { useEffect, useState } from 'react'
import { navigationItems, contactInfo } from '../content'
import { Leaf, ArrowUpRight, Menu, X, Phone, Palette } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from './LanguageTranslator'

export function Header({
  menuOpen,
  onToggleMenu,
  onNavigate,
  onOpenThemeModal,
}) {
  const [scrolled, setScrolled] = useState(false)
  const { brand, t } = useLanguage()

  const navLabels = {
    '/': t.nav.home,
    '/products': t.nav.products,
    '/process': t.nav.process,
    '/about': t.nav.about,
    '/contact': t.nav.contact,
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`liquid-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="liquid-header-bar" data-aos="fade-down" data-aos-duration="600">
        <Link
          className="liquid-brand"
          to="/"
          onClick={onNavigate}
          aria-label={`${brand.fullName} home`}
        >
          <span className="brand-mark-liquid">
            <Leaf className="brand-leaf-icon" />
          </span>
          <div className="brand-text-col notranslate" translate="no">
            <span className="brand-name notranslate" translate="no">{brand.brandName}</span>
            <span className="brand-sub notranslate" translate="no">{brand.brandSub}</span>
          </div>
        </Link>

        <div className="header-trust-chip">
          <span className="trust-dot" />
          <span>{t.nav.ecoTag}</span>
        </div>

        <nav
          id="primary-navigation"
          className={`liquid-nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              to={item.path}
              onClick={onNavigate}
              key={item.path}
              className={({ isActive }) =>
                `liquid-nav-item ${isActive ? 'is-active' : ''}`
              }
            >
              <span className="liquid-nav-text">{navLabels[item.path] || item.label}</span>
            </NavLink>
          ))}
          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="mobile-drawer-theme-btn"
              onClick={() => {
                onNavigate()
                onOpenThemeModal?.()
              }}
            >
              <Palette className="w-4 h-4 text-accent" />
              <span>{t.nav.themeStudio}</span>
              <span className="theme-btn-dot" />
            </button>
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="mobile-drawer-phone"
              onClick={onNavigate}
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 {contactInfo.phones[0]}</span>
            </a>
            <Link
              className="mobile-cta-btn button button-small"
              to="/contact"
              onClick={onNavigate}
            >
              <span>{t.nav.contactUs}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        <div className="header-actions">
          <a
            href={`tel:${contactInfo.phones[0]}`}
            className="header-phone-link"
            title={`Call ${brand.shortName}: +91 ${contactInfo.phones[0]}`}
            aria-label={`Call ${brand.shortName}: +91 ${contactInfo.phones[0]}`}
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span className="header-phone-text">{contactInfo.phones[0]}</span>
          </a>

          <Link className="liquid-cta-btn" to="/contact">
            <span>{t.nav.contactUs}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

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
