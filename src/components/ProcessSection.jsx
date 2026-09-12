import { useState } from 'react'
import { processSteps } from '../content'
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

  return (
    <section className={`process-section section-pad ${isFullPage ? 'is-page-view' : ''}`} id="process">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Our Manufacturing Journey
          </span>
          <h2 className="section-title">
            From Coconut to <em>Premium Product.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Every stage in our four-decade perfected production line is engineered for purity, exact electrical conductivity (EC), balanced moisture, and high-tensile export reliability.
        </p>
      </div>

      {/* Visual Connecting Progress Bar */}
      <div className="process-progress-timeline" data-aos="fade-up" data-aos-delay="100">
        <div className="timeline-track">
          <div className="timeline-fill-bar" />
        </div>
        <div className="timeline-step-dots">
          {processSteps.map((step, idx) => (
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
        {processSteps.map((step, index) => {
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
            <h4 className="qa-card-title">Four Decades of Rigorous Quality Checkpoints</h4>
            <p className="qa-card-desc">
              Every shipment undergoes digital pin-point moisture verification, electrical conductivity (EC) titration testing, and tensile elasticity certification before seaworthy maritime container loading.
            </p>
          </div>
        </div>

        <div className="qa-card-actions">
          <Link to="/contact" className="button button-accent">
            <span>Request Lab Certification</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
