import { useState } from 'react'
import { processSteps } from '../content'
import { useLanguage } from './LanguageTranslator'
import {
  TreePalm,
  Package,
  Cpu,
  Droplets,
  Sun,
  Ship,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap = {
  TreePalm,
  Package,
  Cpu,
  Droplets,
  Sun,
  Ship,
}

export function ProcessSection({ isFullPage = false }) {
  const [activeStep, setActiveStep] = useState(null)
  const { t } = useLanguage()

  const steps = t.process.steps || processSteps

  return (
    <section className={`process-section section-pad ${isFullPage ? 'is-page-view' : ''}`} id="process">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> {t.process.badge}
          </span>
          <h2 className="section-title">
            {t.process.title} <em>{t.process.titleEmphasis}</em>
          </h2>
        </div>
        <p className="section-subtitle">
          {t.process.subtitle}
        </p>
      </div>

      {/* Visual Connecting Progress Bar */}
      <div className="process-progress-timeline" data-aos="fade-up" data-aos-delay="100">
        <div className="timeline-track">
          <div className="timeline-fill-bar" />
        </div>
        <div className="timeline-step-dots">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className={`timeline-dot-wrap ${activeStep === idx ? 'is-active' : ''}`}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              title={`${step.step}: ${step.title}`}
            >
              <span className="timeline-dot-badge">{step.step}</span>
              <span className="timeline-dot-label">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Step Interactive Cards Grid */}
      <div className="process-steps-grid" data-aos="fade-up" data-aos-delay="150">
        {steps.map((step, index) => {
          const IconComponent = iconMap[step.iconName] || TreePalm
          const isSelected = activeStep === index

          return (
            <div
              key={step.step}
              className={`process-step-card ${isSelected ? 'is-highlighted' : ''}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Background Giant Watermark Step Number */}
              <span className="process-card-watermark" aria-hidden="true">
                {step.step}
              </span>

              {/* Card Top: Icon & Step Tag */}
              <div className="process-card-top">
                <div className="process-icon-box">
                  <IconComponent className="process-step-icon" />
                </div>
                <div className="process-step-indicator">
                  <span className="step-mono-label">{step.badge}</span>
                  <div className="step-accent-line" />
                </div>
              </div>

              {/* Card Main Info */}
              <div className="process-card-content">
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-summary">{step.summary}</p>
                <p className="process-card-description">{step.description}</p>

                {/* Key Highlights List */}
                {step.highlights && (
                  <ul className="process-highlights-list">
                    {step.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer Metric Pill */}
              <div className="process-card-footer">
                <span className="process-metric-pill">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{step.metric}</span>
                </span>
              </div>

              {/* Hover Ambient Sheen */}
              <div className="process-card-hover-sheen" aria-hidden="true" />
            </div>
          )
        })}
      </div>

      {/* Industrial Quality Assurance Guarantee Banner */}
      <div className="process-quality-assurance-card" data-aos="fade-up">
        <div className="qa-card-left">
          <div className="qa-badge-icon">
            <Award className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="qa-card-title">{t.process.qaTitle}</h4>
            <p className="qa-card-desc">
              {t.process.qaDesc}
            </p>
          </div>
        </div>

        {/* ISO and 1-Star Category Certificate Official Insignia Badges (Original Icons / Not a button) */}
        <div className="qa-certificates-showcase" aria-label="Official Accreditations & Certifications">
          {/* ISO 9001 Official Quality Certificate Emblem */}
          <div className="qa-cert-insignia-card iso-cert-card">
            <div className="qa-cert-seal-icon">
              <svg viewBox="0 0 56 56" className="cert-vector-emblem" aria-hidden="true">
                <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="1.75" strokeDasharray="3 2" />
                <circle cx="28" cy="28" r="22" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
                <path d="M28 10L32 18H24L28 10Z" fill="currentColor" />
                <circle cx="28" cy="28" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="28" y="26" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="sans-serif" fill="currentColor" letterSpacing="0.5">ISO</text>
                <text x="28" y="34" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="sans-serif" fill="currentColor">9001</text>
                <path d="M18 43L28 47L38 43L35 39H21L18 43Z" fill="currentColor" fillOpacity="0.8" />
              </svg>
            </div>
            <div className="qa-cert-info">
              <span className="qa-cert-tag">{t.process.isoTag}</span>
              <strong className="qa-cert-heading">{t.process.isoHeading}</strong>
              <span className="qa-cert-sub">{t.process.isoSub}</span>
            </div>
          </div>

          {/* 1-Star Category Certificate Official Insignia Emblem */}
          <div className="qa-cert-insignia-card star-cert-card">
            <div className="qa-cert-seal-icon">
              <svg viewBox="0 0 56 56" className="cert-vector-emblem" aria-hidden="true">
                <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="1.75" />
                <circle cx="28" cy="28" r="22.5" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
                <path
                  d="M28 14L31.5 22.5H40.5L33.2 27.8L36 36.5L28 31.2L20 36.5L22.8 27.8L15.5 22.5H24.5L28 14Z"
                  fill="currentColor"
                />
                <path d="M16 38C19 43 24 45 28 45C32 45 37 43 40 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="28" cy="46" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="qa-cert-info">
              <span className="qa-cert-tag">{t.process.govtTag}</span>
              <strong className="qa-cert-heading">{t.process.govtHeading}</strong>
              <span className="qa-cert-sub">{t.process.govtSub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
