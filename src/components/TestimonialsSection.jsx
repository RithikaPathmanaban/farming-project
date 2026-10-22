import { useState } from 'react'
import { testimonials } from '../content'
import { Star, Quote, MessageSquare, Globe2, CheckCircle2 } from 'lucide-react'
import { useLanguage } from './LanguageTranslator'

// Country flag mapping
const flagMap = {
  China: '🇨🇳',
  Europe: '🇪🇺',
  Australia: '🇦🇺',
  Turkey: '🇹🇷',
  Rajasthan: '🇮🇳',
  Chennai: '🇮🇳',
}

export function TestimonialsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0)
  const { t } = useLanguage()

  const localizedTestimonials = testimonials.map((item, idx) => {
    const loc = t.testimonials?.items?.[idx]
    if (!loc) return item
    return {
      ...item,
      name: loc.name || item.name,
      location: loc.location || item.location,
      quote: loc.quote || item.quote,
    }
  })

  const filteredTestimonials =
    selectedFilter === 'all'
      ? localizedTestimonials
      : localizedTestimonials.filter((item) => {
          if (selectedFilter === 'india') return item.location.includes('India') || item.location === 'Chennai' || item.location === 'Rajasthan' || item.location.includes('印度') || item.location.includes('الهند')
          return item.location.toLowerCase().includes(selectedFilter.toLowerCase())
        })

  const currentItem = filteredTestimonials[activeSpotlightIdx] || filteredTestimonials[0] || localizedTestimonials[0]

  return (
    <section className="testimonials-section section-pad" id="testimonials">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <MessageSquare className="w-3.5 h-3.5" /> {t.testimonials?.badge || 'Client Feedback'}
          </span>
          <h2 className="section-title">
            {t.testimonials?.title || 'Trusted by Partners from'} <em>{t.testimonials?.titleEmphasis || 'India to the World.'}</em>
          </h2>
        </div>
        <p className="section-subtitle">
          {t.testimonials?.subtitle || 'Delivering 100% eco-friendly coir and coco peat products with a steadfast commitment to discipline, reliability, and material quality.'}
        </p>
      </div>

      {/* Interactive Country Filter Bar */}
      <div className="testimonials-filter-bar" data-aos="fade-up" data-aos-delay="60" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'all'}
          className={`testimonial-filter-pill ${selectedFilter === 'all' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('all')
            setActiveSpotlightIdx(0)
          }}
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span>{t.testimonials?.allPartners || 'Global Partners'} ({localizedTestimonials.length})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'China'}
          className={`testimonial-filter-pill ${selectedFilter === 'China' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('China')
            setActiveSpotlightIdx(0)
          }}
        >
          <span>🇨🇳 {t.testimonials?.china || 'China'}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'Europe'}
          className={`testimonial-filter-pill ${selectedFilter === 'Europe' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('Europe')
            setActiveSpotlightIdx(0)
          }}
        >
          <span>🇪🇺 {t.testimonials?.europe || 'Europe'}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedFilter === 'india'}
          className={`testimonial-filter-pill ${selectedFilter === 'india' ? 'is-active' : ''}`}
          onClick={() => {
            setSelectedFilter('india')
            setActiveSpotlightIdx(0)
          }}
        >
          <span>🇮🇳 {t.testimonials?.india || 'India (Domestic)'}</span>
        </button>
      </div>

      {/* Featured Testimonial Spotlight Card */}
      <div className="testimonial-spotlight-wrapper" data-aos="fade-up" data-aos-delay="120">
        <div className="testimonial-spotlight-card">
          <div className="spotlight-quote-icon">
            <Quote className="w-8 h-8 text-accent" />
          </div>

          <div className="spotlight-body">
            <div className="spotlight-stars-row">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`star-icon ${i < (currentItem.rating || 5) ? 'filled' : ''}`}
                />
              ))}
              <span className="spotlight-verified-badge">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>{t.testimonials?.verifiedPartner || 'Verified Commercial Buyer'}</span>
              </span>
            </div>

            <blockquote className="spotlight-quote-text">
              &ldquo;{currentItem.quote}&rdquo;
            </blockquote>

            <div className="spotlight-author-row">
              <div className="spotlight-avatar-ring">
                <span className="spotlight-avatar-initial">{currentItem.name.charAt(0)}</span>
              </div>
              <div className="spotlight-author-info">
                <h4 className="spotlight-author-name">{currentItem.name}</h4>
                <span className="spotlight-author-country">
                  {flagMap[currentItem.location] || '🌐'} {currentItem.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Selectors Strip */}
        <div className="testimonial-selector-strip">
          {filteredTestimonials.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              className={`testimonial-mini-tab ${idx === activeSpotlightIdx ? 'is-active' : ''}`}
              onClick={() => setActiveSpotlightIdx(idx)}
            >
              <span className="mini-tab-flag">{flagMap[item.location] || '🌐'}</span>
              <div className="mini-tab-info">
                <strong className="mini-tab-name">{item.name}</strong>
                <span className="mini-tab-loc">{item.location}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
