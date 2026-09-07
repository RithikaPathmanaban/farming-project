import { useState } from 'react'
import type { FormEvent } from 'react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }

  return (
    <section className="contact section-pad" id="contact"><div className="reveal-up"><p className="eyebrow">Start something good</p><h2>Let’s grow a better <em>next season.</em></h2><p>Tell us what you are working on. We’ll bring the right people and materials to the table.</p></div><form onSubmit={handleSubmit}>{submitted ? <div className="success"><strong>Thanks for reaching out.</strong><span>We’ll be in touch shortly.</span></div> : <><label>Your email<input type="email" placeholder="you@yourcompany.com" required /></label><label>What are you growing? <select defaultValue=""><option value="" disabled>Select a focus</option><option>Protected crops</option><option>Soil health</option><option>Land restoration</option></select></label><button type="submit">Send inquiry <span>↗</span></button></>}</form></section>
  )
}
