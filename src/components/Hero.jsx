import { useState, useRef, useEffect } from 'react'
import { animate } from 'animejs'
import { Leaf, ArrowUpRight, ShieldCheck, Sparkles, ChevronRight, Phone, Award } from 'lucide-react'
import { LiquidGlassCard } from './LiquidGlassCard'
import { heroSlides, contactInfo } from '../content'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageTranslator'

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const { brand, t } = useLanguage()
  const slidePanelRef = useRef(null)

  const slides = t.hero.slides || heroSlides

  useEffect(() => {
    if (slidePanelRef.current) {
      animate(slidePanelRef.current, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 400,
        ease: 'outQuad',
      })
    }
  }, [activeSlide])

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const current = slides[activeSlide] || slides[0]

  return (
    <section className="liquid-hero" id="top">
      {/* Background Media with Organic Overlays */}
      <div className="hero-bg-media">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=90"
          alt={`${brand.name} Eco-Friendly Coir & Agricultural Growing Media`}
          className="hero-bg-img"
        />
        <div className="hero-liquid-overlay" />
        <div className="hero-grid-lines" />
      </div>

      <div className="hero-main-container">
        {/* Left Column: Authentic Hero Headline & Value Props */}
        <div className="hero-content-col" data-aos="fade-right" data-aos-duration="900">
          <div className="hero-badge-row">
            <span className="liquid-badge">
              <Leaf className="w-3.5 h-3.5" />
              <span>{t.hero.sinceBadge}</span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="notranslate" translate="no">{brand.name}</span> {t.hero.titlePrefix ? `${t.hero.titlePrefix} ` : ''}<em>{t.hero.titleEmphasis}</em>
          </h1>

          <p className="hero-lead">
            {brand.leadDesc}
          </p>

          <div className="hero-feature-tags">
            <span className="hero-spec-chip">
              <Award className="w-3.5 h-3.5 text-accent" /> {t.hero.chipIso}
            </span>
            <span className="hero-spec-chip">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> {t.hero.chipEco}
            </span>
            <span className="hero-spec-chip">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" /> {t.hero.chipUnits}
            </span>
            <span className="hero-spec-chip">
              <Leaf className="w-3.5 h-3.5 text-accent" /> {t.hero.chipCapacity}
            </span>
          </div>

          <div className="hero-cta-group">
            <Link className="button button-light hero-primary-btn" to="/products">
              <span>{t.hero.btnProducts}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link className="hero-secondary-btn" to="/about">
              <span>{t.hero.btnAbout}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Metrics from thaiagam.com */}
          <div className="hero-quick-metrics" data-aos="fade-up" data-aos-delay="200">
            <div className="quick-metric-item">
              <span className="quick-metric-num">1972</span>
              <span className="quick-metric-lbl">{brand.shortName} Est.</span>
            </div>
            <div className="quick-metric-divider" />
            <div className="quick-metric-item">
              <span className="quick-metric-num">40+</span>
              <span className="quick-metric-lbl">Years Experience</span>
            </div>
            <div className="quick-metric-divider" />
            <div className="quick-metric-item">
              <span className="quick-metric-num">700 MT</span>
              <span className="quick-metric-lbl">Monthly Capacity</span>
            </div>
          </div>
        </div>

        {/* Right Column: Liquid Glass Capability Carousel */}
        <div className="hero-interactive-col" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
          <LiquidGlassCard className="hero-capability-card">
            <div className="hero-card-header">
              <div className="hero-card-tag">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>{t.hero.capabilitiesHeader}</span>
              </div>
              <div className="hero-slider-pills">
                {slides.map((slide, index) => (
                  <button
                    key={slide.tag}
                    onClick={() => setActiveSlide(index)}
                    className={`slider-pill-dot ${index === activeSlide ? 'active' : ''}`}
                    aria-label={`Show ${slide.tag}`}
                  />
                ))}
              </div>
            </div>

            <div className="hero-card-body" ref={slidePanelRef}>
              <span className="cap-tag-pill">{current.tag}</span>
              <h2 className="cap-heading">{current.title}</h2>
              <p className="cap-desc">{current.text}</p>
            </div>

            <div className="hero-card-tabs">
              {slides.map((slide, index) => (
                <button
                  key={slide.tag}
                  onClick={() => setActiveSlide(index)}
                  className={`hero-tab-btn ${index === activeSlide ? 'active' : ''}`}
                >
                  <span className="tab-btn-index">0{index + 1}</span>
                  <span className="tab-btn-highlight">{slide.tag}</span>
                </button>
              ))}
            </div>
          </LiquidGlassCard>

          {/* Floating Heritage Stamp */}
          <div className="hero-floating-badge" data-aos="zoom-in" data-aos-delay="400">
            <div className="badge-ring">
              <span className="badge-year-label">SINCE</span>
              <strong className="badge-year-val">1972</strong>
              <span className="badge-loc">DINDIGUL, INDIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Foot Strip */}
      <div className="hero-bottom-strip">
        <Link to="/about" className="strip-scroll-link">
          <span>{t.hero.exploreBtn}</span>
          <span className="strip-arrow">↓</span>
        </Link>
      </div>
    </section>
  )
}
