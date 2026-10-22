import { useState } from 'react'
import { factoryStories } from '../content'
import { Factory, ArrowUpRight, Maximize2, X, ShieldCheck, ChevronRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageTranslator'

export function AboutSection() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0)
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)
  const [activeModalImg, setActiveModalImg] = useState(null)
  const { brand, t } = useLanguage()

  const localizedStories = factoryStories.map((factory, index) => {
    const loc = t?.about?.stories?.[index]
    if (!loc) return factory
    return {
      ...factory,
      title: loc.title || factory.title,
      text: loc.text || factory.text,
      galleryTitle: loc.galleryTitle || factory.galleryTitle,
    }
  })

  const activeFactory = localizedStories[selectedUnitIdx] || factoryStories[selectedUnitIdx]
  const currentImages = activeFactory.images
  const featuredImage = currentImages[activePhotoIdx] || currentImages[0]

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Factory className="w-3.5 h-3.5" /> {t.about.badge}
          </span>
          <h2 className="section-title">
            {t.about.title} <em>{t.about.titleEmphasis}</em>
          </h2>
        </div>
        <p className="section-subtitle">
          {t.about.subtitle}
        </p>
      </div>

      {/* Interactive Unit Segmented Switcher */}
      <div className="unit-switch-bar" data-aos="fade-up" data-aos-delay="60">
        {localizedStories.map((factory, index) => (
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
              <span>{t.about.dedicatedUnit || 'Dedicated Group Unit'} 0{selectedUnitIdx + 1}</span>
            </div>

            <h3 className="dossier-title">{activeFactory.title}</h3>
            <p className="dossier-desc-text">{activeFactory.text}</p>

            {/* Key Technical Operational Capabilities */}
            <div className="dossier-specs-list">
              {(t.about?.dossierSpecs?.[selectedUnitIdx] || [
                selectedUnitIdx === 0
                  ? '400+ MT / Month Curled Coir Rope specifically twisted for mattresses'
                  : '700+ MT / Month High & Low EC Coco Pith for global agriculture',
                selectedUnitIdx === 0
                  ? '100% natural, biodegradable raw coconut husks sourced from South India'
                  : 'Export-grade packaging with direct port dispatch to China, Europe, Australia & Turkey',
                selectedUnitIdx === 0
                  ? 'Continuous decortication machinery with hydraulic compression balers'
                  : 'Natural sun-cured open yards ensuring optimal low moisture ratios',
              ]).map((specText, sIdx) => (
                <div key={sIdx} className="dossier-spec-item">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{specText}</span>
                </div>
              ))}
            </div>

            <div className="dossier-cta-row">
              <Link to="/contact" className="button button-light">
                <span>{t.about?.inquireUnit || 'Inquire With Unit'} 0{selectedUnitIdx + 1}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="dossier-photo-counter">
                {t.about?.photoLabel || 'Photo'} {activePhotoIdx + 1} {t.about?.photoOf || 'of'} {currentImages.length}
              </span>
            </div>
          </div>

          {/* Right Column: Featured Live Inspection Stage */}
          <div className="console-stage-col">
            <div
              className="console-main-photo-wrap"
              onClick={() => setActiveModalImg(featuredImage)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveModalImg(featuredImage)
                }
              }}
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
                <span className="console-live-tag">{t.about?.liveTag || 'Live Facility Inspection'}</span>
                <div className="console-zoom-pill">
                  <Maximize2 className="w-4 h-4" />
                  <span>{t.about?.zoomHint || 'Enlarge HD View'}</span>
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
