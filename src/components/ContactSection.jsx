import { useState } from 'react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true) }

  return (
    <section className="contact section-pad" id="contact"><div className="reveal-up"><p className="eyebrow">Start a conversation</p><h2>Let&apos;s build the right solution for your <em>operation.</em></h2><p>Tell us what you are working on. We&apos;ll bring the right people and materials to the table.</p><div className="contact-details"><span>New business</span><a href="mailto:hello@thaiagam.example">hello@thaiagam.example</a></div></div><form onSubmit={handleSubmit}>{submitted ? <div className="success"><strong>Inquiry received.</strong><span>Our team will be in touch shortly.</span><button type="button" onClick={() => setSubmitted(false)}>Send another <span>↗</span></button></div> : <><div className="form-row"><label>Full name<input name="name" placeholder="Your name" required /></label><label>Company<input name="company" placeholder="Company name" required /></label></div><div className="form-row"><label>Business email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Country<input name="country" placeholder="Where are you based?" required /></label></div><label>Product / solution<select name="product" defaultValue="" required><option value="" disabled>Select a focus</option><option>Growing media</option><option>Crop systems</option><option>Land care</option><option>Custom fibre solution</option></select></label><label>Requirement<textarea name="message" placeholder="Tell us a little about the operation or project" rows={3} required /></label><button type="submit">Send inquiry <span>↗</span></button></>}</form></section>
  )
}
