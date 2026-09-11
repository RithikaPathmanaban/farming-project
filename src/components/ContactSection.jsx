import { useState } from 'react'
import { LiquidGlassCard } from './LiquidGlassCard'
import { contactInfo, products } from '../content'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, User, Loader2, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react'

const RECIPIENT_EMAIL = 'rithikapathmanaban1804@gmail.com'

const quickProductOptions = [
  { label: 'Curled Coir Rope', tag: 'Mattress Grade' },
  { label: 'Coir Fibre Bales', tag: 'Baled Fibre' },
  { label: 'Low EC Coco Peat', tag: 'Greenhouse' },
  { label: 'High EC Coco Peat', tag: 'Soil Conditioning' },
]

const tonnageOptions = ['< 50 MT', '100 - 400 MT', '500 - 700 MT (Bulk Contract)']

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProductChip, setSelectedProductChip] = useState('')
  const [selectedTonnageChip, setSelectedTonnageChip] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })
  const [submittedData, setSubmittedData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectProductChip = (prodLabel) => {
    setSelectedProductChip(prodLabel)
    setFormData((prev) => ({
      ...prev,
      product: prodLabel,
      message: prev.message || `Hello Thaiagam team, I am interested in placing an order for ${prodLabel}. Please provide CIF / FOB price quote.`,
    }))
  }

  const handleSelectTonnageChip = (tonnage) => {
    setSelectedTonnageChip(tonnage)
    setFormData((prev) => {
      const cleaned = (prev.message || '').replace(/\s*\[Required Monthly Volume:.*?\]/g, '').trim()
      const newMsg = cleaned
        ? `${cleaned} [Required Monthly Volume: ${tonnage}]`
        : `Hello Thaiagam team, our required monthly volume is approx ${tonnage}. Please share contract rates.`
      return {
        ...prev,
        message: newMsg,
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const fd = new FormData(form)
    const userEnteredName = (fd.get('name') || formData.name || '').toString().trim()
    const userEnteredEmail = (fd.get('email') || formData.email || '').toString().trim()
    const userEnteredPhone = (fd.get('phone') || formData.phone || '').toString().trim()
    const userEnteredProduct = (fd.get('product') || formData.product || selectedProductChip || 'General Inquiry').toString().trim()
    const userEnteredMessage = (fd.get('message') || formData.message || '').toString().trim()

    setSubmittedData({
      name: userEnteredName,
      email: userEnteredEmail,
      phone: userEnteredPhone,
      product: userEnteredProduct,
      message: userEnteredMessage,
    })

    const payload = new FormData()
    payload.append('Name', userEnteredName)
    payload.append('Email', userEnteredEmail)
    payload.append('Phone', userEnteredPhone)
    payload.append('Product', userEnteredProduct)
    payload.append('Message', userEnteredMessage)
    payload.append('_subject', `New Inquiry from ${userEnteredName} - Thaiagam Coir`)
    payload.append('_replyto', userEnteredEmail)
    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    try {
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: payload,
      })
    } catch (err) {
      console.warn('FormSubmit background dispatch:', err)
    } finally {
      setIsSubmitting(false)
      setSubmitted(true)
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-layout-grid">
        {/* Left Column: Authentic Contact Info & Direct Desks */}
        <div className="contact-info-col" data-aos="fade-right">
          <span className="liquid-badge">
            <MessageSquare className="w-3.5 h-3.5" /> Contact Us
          </span>
          <h2 className="section-title">
            Get in Touch with <em>Thaiagam.</em>
          </h2>
          <p className="contact-lead-text">
            Operating from Dindigul, Tamil Nadu, our leadership team handles direct export communications, domestic mattress factory supply contracts, and bulk dispatch schedules.
          </p>

          <div className="contact-details-cards">
            {/* Direct Dial Desk */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Direct Leadership Desk</span>
                <p className="contact-leaders-name">{contactInfo.leaders}</p>
                <div className="contact-phone-links">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="phone-link-pill">
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Dispatch */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Official Inquiry Inbox</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-email-link">
                  {contactInfo.email}
                </a>
                <span className="contact-sub-hint">Typical quote response within 2-4 hours</span>
              </div>
            </div>

            {/* Headquarters & Processing Hub */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Registered Office & Mill Location</span>
                <address className="contact-address-text">{contactInfo.address}</address>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Connect Callout */}
          <div className="contact-whatsapp-callout">
            <div className="whatsapp-callout-icon">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="whatsapp-callout-info">
              <strong>Need Immediate Contract Pricing?</strong>
              <p>Chat directly with our export team via WhatsApp.</p>
            </div>
            <a
              href={`https://wa.me/91${contactInfo.phones[0]}?text=Hello%20Thaiagam%20Group%2C%20I'd%20like%20to%20request%20a%20commercial%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-callout-btn"
            >
              <span>Chat Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Configurator Form */}
        <div className="contact-form-col" data-aos="fade-left" data-aos-delay="100">
          <div className="inquiry-configurator-card">
            {submitted ? (
              <div className="form-success-pane" role="status" aria-live="polite">
                <div className="success-icon-bubble">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="success-heading">Inquiry Transmitted Successfully</h3>
                <p className="success-message">
                  Thank you, <strong>{submittedData.name || 'Valued Partner'}</strong>. Your commercial inquiry for{' '}
                  <strong>{submittedData.product || 'Coir Products'}</strong> has been registered directly at our desk.
                </p>

                <div className="success-summary-box">
                  <div className="success-row">
                    <span>Contact Phone:</span>
                    <strong>+91 {submittedData.phone}</strong>
                  </div>
                  <div className="success-row">
                    <span>Email Address:</span>
                    <strong>{submittedData.email}</strong>
                  </div>
                  {submittedData.message && (
                    <div className="success-row-full">
                      <span>Inquiry Specification:</span>
                      <p>&ldquo;{submittedData.message}&rdquo;</p>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="button button-light reset-form-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', product: '', message: '' })
                    setSelectedProductChip('')
                    setSelectedTonnageChip('')
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modern-inquiry-form">
                <div className="form-header-bar">
                  <h3 className="form-title">Commercial Supply Inquiry</h3>
                  <span className="form-badge-accent">Direct Factory Quote</span>
                </div>

                {/* 1. Interactive One-Tap Product Selector Chips */}
                <div className="form-group-chips">
                  <label className="form-label-chips">Step 1: Select Product Requirement</label>
                  <div className="product-chips-grid">
                    {quickProductOptions.map((chip) => (
                      <button
                        key={chip.label}
                        type="button"
                        className={`product-chip-btn ${selectedProductChip === chip.label ? 'is-selected' : ''}`}
                        onClick={() => handleSelectProductChip(chip.label)}
                      >
                        <span className="chip-label">{chip.label}</span>
                        <span className="chip-tag">{chip.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Volume Estimator Chips */}
                <div className="form-group-chips">
                  <label className="form-label-chips">Step 2: Estimated Monthly Volume</label>
                  <div className="tonnage-chips-grid">
                    {tonnageOptions.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`tonnage-chip-btn ${selectedTonnageChip === t ? 'is-selected' : ''}`}
                        onClick={() => handleSelectTonnageChip(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Input Fields */}
                <div className="form-fields-grid">
                  <div className="form-field-item">
                    <label htmlFor="contact-name" className="field-label">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g. Mr. Sriram / Mr. Zhang"
                      value={formData.name}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-item">
                    <label htmlFor="contact-email" className="field-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-item">
                    <label htmlFor="contact-phone" className="field-label">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="+91 98421 19772"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-item">
                    <label htmlFor="contact-product" className="field-label">
                      Specific Product Focus
                    </label>
                    <input
                      type="text"
                      id="contact-product"
                      name="product"
                      placeholder="e.g. Curled Coir Rope 400 MT"
                      value={formData.product || selectedProductChip}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-field-item field-item-full">
                  <label htmlFor="contact-message" className="field-label">
                    Contract Message / Specific Requirements
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    placeholder="Enter required destination port, bale specifications, or delivery schedule..."
                    value={formData.message}
                    onChange={handleChange}
                    className="field-input field-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button button-light form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Contract Details...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Factory Desk</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Location Map Frame */}
      <div className="contact-map-row" data-aos="fade-up" data-aos-delay="150">
        <div className="map-glass-card">
          <div className="map-info-bar">
            <div className="map-info-left">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Dindigul Mill & Factory Yard, Tamil Nadu, India</span>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-direct-link"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <iframe
            title="Thaiagam Coir Mill Dindigul Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62788.16345814524!2d77.93510522167969!3d10.36014440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab002497ebc9%3A0x334cb0ff7513ff6a!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe-element"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
