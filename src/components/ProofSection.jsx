import { useEffect, useRef, useState } from 'react'
import { animate } from 'animejs'
import { proofStats } from '../content'
import { Award, ShieldCheck, Globe2, Sparkles, CheckCircle2, RotateCw, Check } from 'lucide-react'
import { useLanguage } from './LanguageTranslator'

const accreditationIconMap = {
  iso: ShieldCheck,
  'one-star': Award,
  eco: CheckCircle2,
  global: Globe2,
}

const baseAccreditationDetails = [
  {
    id: 'iso',
    icon: ShieldCheck,
    title: 'ISO Certified Standard',
    subtitle: 'Quality Management System',
    frontDesc: 'Certified quality management procedures guaranteeing strict moisture limits, fiber purity, and standardized processing.',
    backHeader: 'ISO Compliance & Quality',
    backPoints: [
      'Standardized manufacturing & decortication pipeline',
      'Digital EC titration & tensile elasticity lab verification',
      'Continuous quality management and batch audits',
      'Certified seaworthy containerized cargo loading',
    ],
  },
  {
    id: 'one-star',
    icon: Award,
    title: '1 Star Category Certificate',
    subtitle: 'Recognized Export House',
    frontDesc: 'Conferred with 1 Star Category Status Holder Certificate by the Government of India for international export performance.',
    backHeader: 'Export House Credentials',
    backPoints: [
      'Government of India recognized 1 Star Export House',
      'Registered & licensed with Coir Board of India',
      'Fast-track priority seaport customs documentation',
      'Proven global delivery track record across 4 continents',
    ],
  },
  {
    id: 'eco',
    icon: CheckCircle2,
    title: '100% Eco-Friendly Certified',
    subtitle: 'Biodegradable Standard',
    frontDesc: 'Produced from natural, organic coconut husks with zero synthetic polymer additives or chemical bleaching.',
    backHeader: 'Sustainability Compliance',
    backPoints: [
      '100% biodegradable organic coir fibers',
      'Solar-cured yards with zero chemical bleaching',
      'Sustainable agricultural carbon-neutral footprint',
      'Safe for organic horticulture & greenhouse farming',
    ],
  },
  {
    id: 'global',
    icon: Globe2,
    title: 'Global Export Footprint',
    subtitle: 'China · Europe · Australia · Turkey',
    frontDesc: 'Direct container shipping via Tuticorin & Chennai deep-water seaports to China, Europe, Australia & Turkey.',
    backHeader: 'Sea Freight Logistics',
    backPoints: [
      'Regular containerized shipments to China, Europe, Australia & Turkey',
      'Pre-shipment phytosanitary inspections & fumigation',
      'Moisture control below critical mold thresholds',
      'High-Cube 40ft container density packaging',
    ],
  },
]

export function ProofSection() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRefs = useRef([])
  const [flippedCards, setFlippedCards] = useState({})
  const { brand, t } = useLanguage()

  const localizedStats = proofStats.map((stat, idx) => {
    const loc = t.proof?.stats?.[idx]
    if (!loc) return stat
    return {
      ...stat,
      label: loc.label || stat.label,
      desc: loc.desc || stat.desc,
    }
  })

  const localizedAccreditations = baseAccreditationDetails.map((acc, idx) => {
    const loc = t.proof?.accreditations?.[idx]
    if (!loc) return acc
    return {
      ...acc,
      title: loc.title || acc.title,
      subtitle: loc.subtitle || acc.subtitle,
      frontDesc: loc.frontDesc || acc.frontDesc,
      backHeader: loc.backHeader || acc.backHeader,
      backPoints: loc.backPoints || acc.backPoints,
    }
  })

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            proofStats.forEach((stat, index) => {
              const el = counterRefs.current[index]
              if (!el) return
              const obj = { val: 0 }
              animate(obj, {
                val: stat.value,
                duration: 1800,
                ease: 'outExpo',
                onUpdate: () => {
                  el.textContent = Math.round(obj.val)
                },
              })
            })
          }
        })
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="proof-section section-pad" id="proof" ref={sectionRef}>
      <div className="proof-top-grid">
        {/* Left Column: Visual Media with Floating Badge */}
        <div className="proof-visual-col" data-aos="fade-right" data-aos-duration="700">
          <div className="proof-image-frame">
            <img
              src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=85"
              alt="Thaiagam Eco-Friendly Coir Agriculture"
              className="proof-img"
              loading="lazy"
            />
            <div className="proof-image-gradient" />
            <div className="proof-badge-floating">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{t.hero?.chipEco || '100% Eco-Friendly & Biodegradable'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry Readouts */}
        <div className="proof-copy-col" data-aos="fade-left" data-aos-duration="700">
          <span className="liquid-badge">
            <Award className="w-3.5 h-3.5" /> {t.gauges?.badge || 'Group Experience'}
          </span>
          <h2 className="section-title">
            <span className="notranslate" translate="no">{brand.name}</span> <em>{t.statement?.headlineEmphasis || 'Since 1972.'}</em>
          </h2>
          <p className="proof-lead-text">
            {brand.leadDesc}
          </p>

          {/* Animated Metrics Grid */}
          <div className="proof-counter-grid">
            {localizedStats.map((stat, index) => (
              <div
                className="counter-card"
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <div className="counter-val-wrap">
                  <span
                    className="counter-number"
                    ref={(el) => {
                      counterRefs.current[index] = el
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="counter-suffix">{stat.suffix}</span>
                </div>
                <strong className="counter-label">{stat.label}</strong>
                <span className="counter-desc">{stat.desc}</span>
                <div className="counter-progress-bar">
                  <div className="counter-progress-fill" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Flipping Accreditation Seals Grid (Unique interactive card flip UI) */}
      <div className="certifications-row" data-aos="fade-up" data-aos-delay="150">
        <div className="cert-header">
          <ShieldCheck className="w-5 h-5 text-accent" />
          <span>{t.hero?.chipIso || 'ISO & 1 Star Category Certified'} · {t.proof?.accreditations?.[3]?.subtitle || 'China · Europe · Australia · Turkey'}</span>
        </div>

        <div className="cert-cards-grid">
          {localizedAccreditations.map((item) => {
            const Icon = item.icon
            const isFlipped = !!flippedCards[item.id]

            return (
              <div
                key={item.id}
                className={`flip-card-3d ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleFlip(item.id)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isFlipped}
                aria-label={`Inspect ${item.title} accreditation. Click to flip.`}
              >
                <div className="flip-card-inner">
                  {/* Card Front */}
                  <div className="flip-card-front">
                    <div className="flip-front-header">
                      <div className="cert-icon-wrap">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="flip-badge-hint">
                        <RotateCw className="w-3.5 h-3.5" /> ↻
                      </span>
                    </div>

                    <h4 className="cert-title">{item.title}</h4>
                    <span className="cert-sub">{item.subtitle}</span>
                    <p className="cert-desc">{item.frontDesc}</p>
                  </div>

                  {/* Card Back */}
                  <div className="flip-card-back">
                    <div className="flip-back-header">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span className="flip-back-title">{item.backHeader}</span>
                    </div>

                    <ul className="flip-back-list">
                      {item.backPoints.map((point, pIdx) => (
                        <li key={pIdx}>
                          <Check className="w-3.5 h-3.5 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProofSection
