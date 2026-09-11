import { testimonials } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { Star, Quote, MessageSquare } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad" id="testimonials">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <MessageSquare className="w-3.5 h-3.5" /> Client Feedback
          </span>
          <h2 className="section-title">
            Trusted by Partners from <em>India to the World.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Delivering 100% eco-friendly coir and coco peat products with a steadfast commitment to discipline, reliability, and material quality.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="testimonial-card-wrap"
          >
            <LiquidGlassCard className="testimonial-card" enableTilt={true}>
              <div className="testimonial-card-top">
                <div className="quote-badge">
                  <Quote className="w-5 h-5 text-accent" />
                </div>
                <div className="star-row">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`star-icon ${i < item.rating ? 'filled' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">&ldquo;{item.quote}&rdquo;</p>

              <div className="testimonial-author-box">
                <div className="author-avatar-initial">
                  {item.name.charAt(0)}
                </div>
                <div className="author-details">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-loc">{item.location}</span>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        ))}
      </div>
    </section>
  )
}
