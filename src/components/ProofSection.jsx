import { useEffect, useRef, useState } from 'react'
import { animate } from 'animejs'
import { proofStats, contactInfo } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { Award, ShieldCheck, Globe2, Sparkles, CheckCircle2 } from 'lucide-react'

export function ProofSection() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRefs = useRef([])

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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="proof-section section-pad" id="proof" ref={sectionRef}>
      <div className="proof-top-grid">
        {/* Left Column: Authentic Visual Media */}
        <div className="proof-visual-col" data-aos="fade-right" data-aos-duration="800">
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

        {/* Right Column: Key Metrics from thaiagam.com */}
        <div className="proof-copy-col" data-aos="fade-left" data-aos-duration="800">
          <span className="liquid-badge">
            <Award className="w-3.5 h-3.5" /> Group Experience
          </span>
          <h2 className="section-title">
            Established Heritage <em>Since 1972.</em>
          </h2>
          <p className="proof-lead-text">
            Thaiagam group of companies has more than 40 years of experience in coir products. Our production unit produces more than 400 MT/month of curled coir and 700 MT/month of coir peat products.
          </p>

          {/* Animated Metrics Grid */}
          <div className="proof-counter-grid">
            {proofStats.map((stat, index) => (
              <div
                className="counter-card"
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={index * 90}
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
              </div>
            ))}
          </div>

          <div className="proof-status-row">
            <span className="status-indicator-dot" />
            <span>100% Eco-Friendly & Biodegradable Coir Products · Since 1972</span>
          </div>
        </div>
      </div>

      {/* Verified Accreditations Row */}
      <div className="certifications-row" data-aos="fade-up" data-aos-delay="200">
        <div className="cert-header">
          <ShieldCheck className="w-5 h-5 text-accent" />
          <span>MANUFACTURING & EXPORT EXCELLENCE</span>
        </div>
        <div className="cert-cards-grid cert-grid-3">
          <LiquidGlassCard className="cert-card" enableTilt={false}>
            <div className="cert-icon-wrap">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <div className="cert-text">
              <h4 className="cert-title">100% Eco-Friendly</h4>
              <p className="cert-desc">Manufactured using modern innovation and top notch natural raw materials.</p>
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard className="cert-card" enableTilt={false}>
            <div className="cert-icon-wrap">
              <Globe2 className="w-5 h-5 text-accent" />
            </div>
            <div className="cert-text">
              <h4 className="cert-title">Global Markets</h4>
              <p className="cert-desc">Exporting coco peat to European countries & Australia, coir fibre to China.</p>
            </div>
          </LiquidGlassCard>

          <LiquidGlassCard className="cert-card" enableTilt={false}>
            <div className="cert-icon-wrap">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="cert-text">
              <h4 className="cert-title">Domestic Industry Leader</h4>
              <p className="cert-desc">Supplying India’s leading mattress companies about 400 MT per month.</p>
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  )
}
