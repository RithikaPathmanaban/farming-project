import { useState } from 'react'
import { factoryStories } from '../content'
import { Factory, ArrowUpRight, Maximize2, X, ShieldCheck, ChevronRight, Check } from 'lucide-react'

export function AboutSection() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0)
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)
  const [activeModalImg, setActiveModalImg] = useState(null)

  const activeFactory = factoryStories[selectedUnitIdx]
  const currentImages = activeFactory.images
  const featuredImage = currentImages[activePhotoIdx] || currentImages[0]

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Factory className="w-3.5 h-3.5" /> Group Units
          </span>
          <h2 className="section-title">
            About <em>Thaiagam Group.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Established in 1972 with over 40 years of industrial excellence. Our group operates four specialized manufacturing units for curled coir rope, coir fibre bales, and coco peat export.
        </p>
      </div>

      {/* Interactive Unit Segmented Switcher */}
      <div className="unit-switch-bar" data-aos="fade-up" data-aos-delay="60">
        {factoryStories.map((factory, index) => (
          <button
            key={factory.number}
            type="button"
            onClick={() => {
              setSelectedUnitIdx(index)
              setActivePhotoIdx(0)
            }}
            className={`unit-switch-btn ${index === selectedUnitIdx ? 'is-active' : ''}`}
          >
            <span className="unit-btn-num">Unit 0{index + 1}</span>
            <span className="unit-btn-title">{factory.title}</span>
          </button>
        ))}
      </div>

      {/* Industrial Inspection Console */}
      <div className="factory-console-card" data-aos="fade-up" data-aos-delay="120">
        <div className="console-grid-layout">
          {/* Left Column: Unit Dossier & Operational Capabilities */}
          <div className="console-dossier-col">
            <div className="dossier-meta-badge">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Dedicated Group Unit 0{selectedUnitIdx + 1}</span>
            </div>

            <h3 className="dossier-title">{activeFactory.title}</h3>
            <p className="dossier-desc-text">{activeFactory.text}</p>

            {/* Key Technical Operational Capabilities */}
            <div className="dossier-specs-list">
              <div className="dossier-spec-item">
                <Check className="w-4 h-4 text-accent" />
                <span>
                  {selectedUnitIdx === 0
                    ? '400+ MT / Month Curled Coir Rope specifically twisted for mattresses'
                    : '700+ MT / Month High & Low EC Coco Pith for global agriculture'}
                </span>
              </div>
              <div className="dossier-spec-item">
                <Check className="w-4 h-4 text-accent" />
                <span>
                  {selectedUnitIdx === 0
                    ? '100% natural, biodegradable raw coconut husks sourced from South India'
                    : 'Export-grade packaging with direct port dispatch to Europe, China & Australia'}
                </span>
              </div>
              <div className="dossier-spec-item">
                <Check className="w-4 h-4 text-accent" />
                <span>
                  {selectedUnitIdx === 0
                    ? 'Continuous decortication machinery with hydraulic compression balers'
                    : 'Natural sun-cured open yards ensuring optimal low moisture ratios'}
                </span>
              </div>
            </div>

            <div className="dossier-cta-row">
              <a href="#contact" className="button button-light">
                <span>Inquire With Unit 0{selectedUnitIdx + 1}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="dossier-photo-counter">
                Photo {activePhotoIdx + 1} of {currentImages.length}
              </span>
            </div>
          </div>

          {/* Right Column: Featured Live Inspection Stage */}
          <div className="console-stage-col">
            <div
              className="console-main-photo-wrap"
              onClick={() => setActiveModalImg(featuredImage)}
              role="button"
              tabIndex={0}
              aria-label="Click to enlarge factory photo"
            >
              <img
                src={featuredImage}
                alt={`${activeFactory.galleryTitle} view ${activePhotoIdx + 1}`}
                className="console-featured-img"
              />
              <div className="console-photo-glass-overlay">
                <span className="console-live-tag">Live Facility Inspection</span>
                <div className="console-zoom-pill">
                  <Maximize2 className="w-4 h-4" />
                  <span>Enlarge HD View</span>
                </div>
              </div>
            </div>

            {/* Interactive Filmstrip Thumbnails Strip */}
            <div className="console-filmstrip-row">
              {currentImages.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`console-thumb-pill ${idx === activePhotoIdx ? 'is-selected' : ''}`}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="console-thumb-img" />
                </button>
              ))}
            </div>
          </div>
        </div>
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

export default AboutSection
