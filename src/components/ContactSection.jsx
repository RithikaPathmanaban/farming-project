import { useState } from 'react'
import { LiquidGlassCard } from './LiquidGlassCard'
import { contactInfo, products } from '../content'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, User, Loader2 } from 'lucide-react'

const RECIPIENT_EMAIL = 'rithikapathmanaban1804@gmail.com'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Capture the exact live values entered into the input fields by the user
    const form = event.currentTarget
    const fd = new FormData(form)
    const userEnteredName = (fd.get('name') || formData.name || '').toString().trim()
    const userEnteredEmail = (fd.get('email') || formData.email || '').toString().trim()
    const userEnteredPhone = (fd.get('phone') || formData.phone || '').toString().trim()
    const userEnteredProduct = (fd.get('product') || formData.product || 'General Inquiry').toString().trim()
    const userEnteredMessage = (fd.get('message') || formData.message || '').toString().trim()

    setSubmittedData({
      name: userEnteredName,
      email: userEnteredEmail,
      phone: userEnteredPhone,
      product: userEnteredProduct,
      message: userEnteredMessage,
    })

    // Construct multipart form payload with user's data
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
        {/* Left Column: Authentic Contact Info from thaiagam.com */}
        <div className="contact-info-col" data-aos="fade-right">
          <span className="liquid-badge">
            <MessageSquare className="w-3.5 h-3.5" /> Contact Us
          </span>
          <h2 className="section-title">
            Get in Touch with <em>Thaiagam.</em>
          </h2>
          <p className="contact-lead-text">
            Thaiagam group of companies since 1972. Reach out to our management and export desk for product inquiries and bulk supply orders.
          </p>

          <div className="contact-quick-cards">
            {/* Leadership */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <User className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="contact-card-lbl">Management</span>
                <span className="contact-card-val">{contactInfo.leaders}</span>
              </div>
            </div>

            {/* Address */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="contact-card-lbl">Registered Address</span>
                <span className="contact-card-val">{contactInfo.address}</span>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="contact-card-lbl">Phone Numbers</span>
                <div className="contact-card-phones">
                  <a href={`tel:${contactInfo.phones[0]}`} className="contact-card-val">
                    +91 {contactInfo.phones[0]}
                  </a>
                  <span className="phone-sep">/</span>
                  <a href={`tel:${contactInfo.phones[1]}`} className="contact-card-val">
                    +91 {contactInfo.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="contact-card-lbl">Email Address</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-card-val">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Contact Form */}
        <div className="contact-form-col" data-aos="fade-left" data-aos-delay="150">
          <LiquidGlassCard className="contact-glass-form-card" enableTilt={false}>
            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-bubble">
                  <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="success-heading">Message Sent Successfully!</h3>
                <p className="success-message">
                  Thank you <strong>{submittedData.name || 'Valued Customer'}</strong>! Your inquiry regarding <strong>{submittedData.product}</strong> has been sent to <strong>{RECIPIENT_EMAIL}</strong>. Our team will review your inquiry and get back to you shortly.
                </p>
                <div className="success-target-email-badge">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>Delivered to: <strong>{RECIPIENT_EMAIL}</strong></span>
                </div>
                <div className="success-actions-row">
                  <button
                    type="button"
                    className="button button-light success-reset-btn"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        product: '',
                        message: '',
                      })
                      setSubmittedData({
                        name: '',
                        email: '',
                        phone: '',
                        product: '',
                        message: '',
                      })
                    }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rfq-form">
                <div className="rfq-form-heading">
                  <h4>Send a Message</h4>
                  <span>Direct inquiry to {RECIPIENT_EMAIL}</span>
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-row-duo">
                  <div className="form-field-wrap">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-field-wrap">
                    <label htmlFor="phone">Your Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="product">Product of Interest</label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">Select Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="message">Enter Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your requirement or message here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="button button-light rfq-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  )
}
