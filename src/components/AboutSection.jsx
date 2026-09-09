import { useState } from 'react'
import { factoryStories } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { Factory, ArrowUpRight, Maximize2, X, ShieldCheck } from 'lucide-react'

export function AboutSection() {
  const [selectedFactoryIdx, setSelectedFactoryIdx] = useState(0)
  const [activeModalImg, setActiveModalImg] = useState(null)

  const activeFactory = factoryStories[selectedFactoryIdx]

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Factory className="w-3.5 h-3.5" /> About Thaiagam
          </span>
          <h2 className="section-title">
            About <em>Us.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units.
        </p>
      </div>

      {/* Factory Switcher Tabs */}
      <div className="factory-tab-bar" data-aos="fade-up" data-aos-delay="100">
        {factoryStories.map((factory, index) => (
          <button
            key={factory.number}
            onClick={() => setSelectedFactoryIdx(index)}
            className={`factory-nav-tab ${index === selectedFactoryIdx ? 'active' : ''}`}
          >
            <span className="tab-unit-num">Unit 0{index + 1}</span>
            <span className="tab-unit-title">{factory.title}</span>
          </button>
        ))}
      </div>

      {/* Active Factory Profile Card */}
      <div className="factory-profile-container" data-aos="fade-up" data-aos-delay="150">
        <LiquidGlassCard className="factory-profile-card" enableTilt={false}>
          <div className="factory-meta-row">
            <div className="factory-title-block">
              <span className="factory-unit-tag">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Group Unit 0{selectedFactoryIdx + 1}
              </span>
              <h3 className="factory-heading">{activeFactory.title}</h3>
            </div>
            <a href="#contact" className="factory-inquire-cta button button-small">
              <span>Contact Unit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <p className="factory-description-text">{activeFactory.text}</p>

          {/* Gallery Showcase */}
          <div className="factory-gallery-zone">
            <div className="gallery-header-row">
              <h4 className="gallery-section-title">{activeFactory.galleryTitle}</h4>
              <span className="gallery-count-chip">{activeFactory.images.length} Factory Photos</span>
            </div>

            <div className="factory-image-masonry">
              {activeFactory.images.map((img, imgIdx) => (
                <div
                  key={img}
                  className="gallery-thumb-wrap"
                  onClick={() => setActiveModalImg(img)}
                  data-aos="zoom-in"
                  data-aos-delay={imgIdx * 60}
                >
                  <img
                    src={img}
                    alt={`${activeFactory.galleryTitle} view ${imgIdx + 1}`}
                    loading="lazy"
                    className="gallery-thumb-img"
                  />
                  <div className="gallery-hover-overlay">
                    <Maximize2 className="w-5 h-5" />
                    <span>View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LiquidGlassCard>
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
            <img src={activeModalImg} alt="Factory view enlarged" className="modal-enlarged-img" />
          </div>
        </div>
      )}
    </section>
  )
}
