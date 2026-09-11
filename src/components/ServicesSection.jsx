import { useState, useEffect } from 'react'
import { services } from '../content'
import { Truck, Check, Maximize2, X, ArrowRight, ShieldCheck } from 'lucide-react'

export function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [activeModalImg, setActiveModalImg] = useState(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalImg(null)
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % services.length)
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + services.length) % services.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="services-section section-pad" id="services">
      <div className="section-head-wrap services-head-row" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Truck className="w-3.5 h-3.5" /> Operations & Supply
          </span>
          <h2 className="section-title">
            Our Operational & <em>Supply Services.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Explore our mechanized handling, specialized sun-curing yards, and nationwide logistics infrastructure. Click or hover any facility to inspect operations.
        </p>
      </div>

      {/* Interactive Expanding Accordion Deck */}
      <div className="services-expand-deck" data-aos="fade-up" data-aos-delay="100">
        {services.map((service, index) => {
          const isActive = index === activeIdx

          return (
            <div
              key={service.id}
              className={`service-deck-card ${isActive ? 'is-expanded' : 'is-collapsed'}`}
              onMouseEnter={() => setActiveIdx(index)}
              onClick={() => setActiveIdx(index)}
              role="region"
              aria-expanded={isActive}
              aria-label={service.title}
            >
              {/* Background Full-bleed Image with overlay */}
              <div className="service-deck-bg-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-deck-img"
                  loading="lazy"
                />
                <div className="service-deck-scrim" />
              </div>

              {/* Collapsed State Strip (visible when not expanded on desktop) */}
              {!isActive && (
                <div className="service-collapsed-content">
                  <span className="deck-collapsed-num">0{index + 1}</span>
                  <span className="deck-collapsed-tag">{service.tag}</span>
                  <h3 className="deck-collapsed-title">{service.title}</h3>
                </div>
              )}

              {/* Expanded State Rich Content */}
              {isActive && (
                <div className="service-expanded-content">
                  <div className="deck-top-row">
                    <div className="deck-badge-group">
                      <span className="deck-index-badge">Facility 0{index + 1}</span>
                      <span className="deck-category-badge">{service.tag}</span>
                    </div>

                    <button
                      type="button"
                      className="deck-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveModalImg(service.image)
                      }}
                      aria-label={`Enlarge photo of ${service.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Inspect Photo</span>
                    </button>
                  </div>

                  <div className="deck-body-block">
                    <h3 className="deck-expanded-title">{service.title}</h3>
                    <p className="deck-expanded-desc">{service.description}</p>

                    {/* Operational Highlights Checklist */}
                    <div className="deck-features-grid">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="deck-feature-pill">
                          <Check className="deck-check-icon" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="deck-bottom-bar">
                      <div className="deck-stat-chip">
                        <span className="deck-stat-label">Capacity Metric</span>
                        <strong className="deck-stat-val">{service.stats}</strong>
                      </div>

                      <a href="#contact" className="deck-inquire-link">
                        <span>Book Capacity</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModalImg(null)}
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={activeModalImg} alt="Facility Enlarged" className="modal-enlarged-img" />
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesSection
