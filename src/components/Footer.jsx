import { Leaf, ArrowUp, Mail, Phone, MapPin, Globe2 } from 'lucide-react'
import { contactInfo, products } from '../content'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a className="liquid-brand" href="#top" aria-label="Thaiagam Group of Companies home">
              <span className="brand-mark-liquid">
                <Leaf className="brand-leaf-icon" />
              </span>
              <div className="brand-text-col">
                <span className="brand-name">THAIAGAM</span>
                <span className="brand-sub">GROUP OF COMPANIES · SINCE 1972</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units supplying qualitative coir products.
            </p>
            <div className="footer-est-tag">
              <span>{contactInfo.leaders}</span>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer-nav-col">
            <span className="footer-col-head">Our Products</span>
            {products.map((p) => (
              <a href="#products" key={p.id}>
                {p.title}
              </a>
            ))}
          </div>

          {/* Contact Details from thaiagam.com */}
          <div className="footer-contact-col">
            <span className="footer-col-head">Contact Office</span>
            <div className="footer-contact-link">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{contactInfo.address}</span>
            </div>
            <a href={`tel:${contactInfo.phones[0]}`} className="footer-contact-link">
              <Phone className="w-4 h-4 text-accent" />
              <span>+91 {contactInfo.phones[0]} / {contactInfo.phones[1]}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">
              <Mail className="w-4 h-4 text-accent" />
              <span>{contactInfo.email}</span>
            </a>
            <button type="button" onClick={scrollToTop} className="footer-back-top-btn">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>© Copyright 2026 Thaiagam Group of Companies. All rights reserved.</span>
            <span>100% Eco-Friendly Coir & Coco Peat Products</span>
          </div>
          <div className="footer-ports-indicator">
            <Globe2 className="w-3.5 h-3.5 text-accent" />
            <span>100% Biodegradable & Eco-Friendly Agro Products</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
