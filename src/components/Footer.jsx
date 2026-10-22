import { Leaf, ArrowUp, Mail, Phone, MapPin, Globe2 } from 'lucide-react'
import { contactInfo, products, navigationItems } from '../content'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageTranslator'

export function Footer() {
  const { brand, t } = useLanguage()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLabels = {
    '/': t.nav.home,
    '/products': t.nav.products,
    '/process': t.nav.process,
    '/about': t.nav.about,
    '/contact': t.nav.contact,
  }

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link className="liquid-brand" to="/" aria-label={`${brand.fullName} home`}>
              <span className="brand-mark-liquid">
                <Leaf className="brand-leaf-icon" />
              </span>
              <div className="brand-text-col notranslate" translate="no">
                <span className="brand-name notranslate" translate="no">{brand.brandName}</span>
                <span className="brand-sub notranslate" translate="no">{brand.brandSub}</span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              {brand.aboutDesc}
            </p>
            <div className="footer-est-tag">
              <span>{contactInfo.leaders} · Dindigul, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <span className="footer-col-head">{t.footer.navHeader}</span>
            {navigationItems.map((item) => (
              <Link to={item.path} key={item.path}>
                {navLabels[item.path] || item.label}
              </Link>
            ))}
          </div>

          {/* Products Column */}
          <div className="footer-nav-col">
            <span className="footer-col-head">{t.footer.catalogHeader}</span>
            {products.map((p, idx) => (
              <Link to={`/products?target=${p.id}`} key={p.id}>
                {t.products.items?.[idx]?.title || p.title}
              </Link>
            ))}
          </div>

          {/* Contact Details from thaiagam.com */}
          <div className="footer-contact-col">
            <span className="footer-col-head">{t.footer.contactHeader}</span>
            <div className="footer-contact-link">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{contactInfo.address}</span>
            </div>
            <a href={`tel:${contactInfo.phones[0]}`} className="footer-contact-link">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 {contactInfo.phones.join(' / +91 ')}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">
              <Mail className="w-4 h-4 text-accent" />
              <span>{contactInfo.email}</span>
            </a>
            <button type="button" onClick={scrollToTop} className="footer-back-top-btn">
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© Copyright 2026 {brand.fullName}. All rights reserved.</span>
            <span>{t.footer.legalText}</span>
          </div>
          <div className="footer-ports-indicator">
            <Globe2 className="w-3.5 h-3.5 text-accent" />
            <span>{t.footer.exportPorts}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
