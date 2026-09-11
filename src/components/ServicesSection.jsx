import { useState, useEffect, useRef, useCallback } from 'react'
import { services } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { Truck, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { animate } from 'animejs'

export function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeModalImg, setActiveModalImg] = useState(null)
  const trackRef = useRef(null)
  const [slidesToShow, setSlidesToShow] = useState(2)

  // Responsive slides calculation with safe index clamping on screen size change
  useEffect(() => {
    const handleResize = () => {
      const newSlides = window.innerWidth < 768 ? 1 : 2
      setSlidesToShow(newSlides)
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, services.length - newSlides)))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, services.length - slidesToShow)

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused || activeModalImg) return
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, activeModalImg, handleNext])

  // Animate track using Anime.js when currentIndex changes
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const slideWidthPercent = 100 / slidesToShow
    const targetTranslateX = -(currentIndex * slideWidthPercent)

    animate(track, {
      translateX: `${targetTranslateX}%`,
      duration: 650,
      ease: 'outCubic',
    })
  }, [currentIndex, slidesToShow])

  // Escape and Arrow key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalImg(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev])

  return (
    <section className="services-section section-pad" id="services">
      <div className="section-head-wrap services-head-row" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Truck className="w-3.5 h-3.5" /> Our Services
          </span>
          <h2 className="section-title">
            Our Operational & <em>Supply Services.</em>
          </h2>
        </div>

        {/* Carousel Arrows */}
        <div className="carousel-nav-arrows">
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={handlePrev}
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={handleNext}
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Viewport */}
      <div
        className="service-carousel-viewport"
        data-aos="fade-up"
        data-aos-delay="100"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="service-carousel-track" ref={trackRef}>
          {services.map((service, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + slidesToShow
            return (
              <div
                key={service.id}
                className={`service-carousel-slide ${isVisible ? 'is-active-slide' : ''}`}
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="service-slide-inner">
                  <LiquidGlassCard className="service-minimal-card" enableTilt={true}>
                    <div
                      className="service-card-media-wrap"
                      onClick={() => setActiveModalImg(service)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setActiveModalImg(service)}
                      aria-label={`View photo of ${service.title}`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-full-img"
                        loading="lazy"
                      />

                      {/* Frosted Glass Bottom Scrim */}
                      <div className="service-card-glass-scrim" />

                      {/* Hover Zoom Pill */}
                      <div className="service-card-zoom-pill">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </div>

                      {/* Heading Alone */}
                      <div className="service-card-title-bar">
                        <h3 className="service-minimal-heading">{service.title}</h3>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots-bar" data-aos="fade-up" data-aos-delay="150">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`carousel-dot-pill ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="factory-modal-overlay"
          onClick={() => setActiveModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="factory-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="factory-modal-close"
              onClick={() => setActiveModalImg(null)}
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeModalImg.image}
              alt={activeModalImg.title}
              className="factory-modal-img"
            />
            <div className="factory-modal-caption">
              <h4 className="caption-title">{activeModalImg.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
