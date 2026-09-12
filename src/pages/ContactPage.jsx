import { ContactSection } from '../components/ContactSection'
import { contactInfo } from '../content'
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Globe } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="page-contact-view">
      {/* 1. Contact Hero Banner */}
      <section className="contact-page-hero">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="contact-hero-container" data-aos="fade-up">
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Direct Communications
          </span>
          <h1 className="contact-hero-title">
            Let’s Discuss Your <em>Export & Volume Requirements.</em>
          </h1>
          <p className="contact-hero-desc">
            Connect directly with Thaiagam Group leadership for contract manufacturing, CIF/FOB pricing, custom EC tolerances, and container shipping schedules.
          </p>

          {/* Quick Direct Communication Strip */}
          <div className="contact-quick-strip">
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="quick-strip-card"
            >
              <div className="quick-strip-icon">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="quick-strip-text">
                <span className="quick-strip-label">Direct Phone</span>
                <span className="quick-strip-val">+91 {contactInfo.phones[0]}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/91${contactInfo.phones[0]}?text=Hello%20Thaiagam%20Group%2C%20I'd%20like%20to%20enquire%20about%20your%20coir%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-strip-card"
            >
              <div className="quick-strip-icon">
                <MessageCircle className="w-5 h-5 text-sprout" />
              </div>
              <div className="quick-strip-text">
                <span className="quick-strip-label">WhatsApp Sales</span>
                <span className="quick-strip-val">Instant Chat Online</span>
              </div>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="quick-strip-card"
            >
              <div className="quick-strip-icon">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div className="quick-strip-text">
                <span className="quick-strip-label">Official Email</span>
                <span className="quick-strip-val">{contactInfo.email}</span>
              </div>
            </a>

            <div className="quick-strip-card">
              <div className="quick-strip-icon">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div className="quick-strip-text">
                <span className="quick-strip-label">Headquarters</span>
                <span className="quick-strip-val">Dindigul, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Contact Form & Inquiry System */}
      <ContactSection />
    </div>
  )
}

export default ContactPage
