import { useEffect, useRef, useState } from 'react'
import { animate } from 'animejs'
import { proofStats } from '../content'
import { Award, ShieldCheck, Globe2, Sparkles, CheckCircle2, RotateCw, Check } from 'lucide-react'

const accreditationDetails = [
  {
    id: 'eco',
    icon: CheckCircle2,
    title: '100% Eco-Friendly Certified',
    subtitle: 'Biodegradable Standard',
    frontDesc: 'Produced from natural, organic coconut husks with zero synthetic polymer additives.',
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
    title: 'Global Export Clearance',
    subtitle: 'Customs & Port Compliant',
    frontDesc: 'Direct container shipping via Tuticorin & Chennai deep-water seaports to Europe, China & Australia.',
    backHeader: 'Sea Freight Logistics',
    backPoints: [
      'Pre-shipment phytosanitary inspections',
      'Moisture control below critical mold thresholds',
      'High-Cube 40ft container density packaging',
      'FOB & CIF commercial invoice documentation',
    ],
  },
  {
    id: 'industry',
    icon: Sparkles,
    title: 'Leading Mattress Supplier',
    subtitle: 'Industrial B2B Grade',
    frontDesc: 'Supplying India’s premier mattress brands with over 400 MT of curled coir rope monthly.',
    backHeader: 'Mattress Core Quality',
    backPoints: [
      'High spring-back memory coil elasticity',
      'Precision machine-spun continuous rope twist',
      'Optimal needle felt and rubberized coir compatibility',
      'Dedicated transport fleet across South & Central India',
    ],
  },
]

export function ProofSection() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRefs = useRef([])
  const [flippedCards, setFlippedCards] = useState({})

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
              <span>100% Eco-Friendly & Biodegradable</span>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry Readouts */}
        <div className="proof-copy-col" data-aos="fade-left" data-aos-duration="700">
          <span className="liquid-badge">
            <Award className="w-3.5 h-3.5" /> Group Experience
          </span>
          <h2 className="section-title">
            Industrial Heritage <em>Since 1972.</em>
          </h2>
          <p className="proof-lead-text">
            Thaiagam group of companies has more than 40 years of experience in coir products. Our production units supply more than 400 MT/month curled coir and 700 MT/month coir peat products globally.
          </p>

          {/* Animated Metrics Grid */}
          <div className="proof-counter-grid">
            {proofStats.map((stat, index) => (
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
          <span>VERIFIED ACCREDITATIONS & INDUSTRIAL COMPLIANCE (CLICK CARD TO FLIP ↻)</span>
        </div>

        <div className="cert-cards-grid cert-grid-3">
          {accreditationDetails.map((item) => {
            const Icon = item.icon
            const isFlipped = !!flippedCards[item.id]

            return (
              <div
                key={item.id}
                className={`flip-card-3d ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(item.id)}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${item.title}`}
              >
                <div className="flip-card-inner">
                  {/* Card Front */}
                  <div className="flip-card-front">
                    <div className="flip-front-header">
                      <div className="cert-icon-wrap">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="flip-badge-hint">
                        <RotateCw className="w-3.5 h-3.5" /> Tap to Flip
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

                    <span className="flip-return-hint">Click again to return</span>
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
