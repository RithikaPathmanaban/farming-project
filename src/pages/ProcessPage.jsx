import { ProcessSection } from '../components/ProcessSection'
import { contactInfo } from '../content'
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
  ArrowRight,
  Sun,
  Droplets,
  Activity,
  FileCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const qualityCheckpoints = [
  {
    title: 'Pinpoint Digital Moisture Analysis',
    standard: '< 15% Moisture Target',
    desc: 'Each batch is tested at multiple points across the sun-curing yards using calibrated digital pin moisture meters before baling or block compression.',
    icon: Activity,
  },
  {
    title: 'EC (Electrical Conductivity) Testing',
    standard: 'Low EC < 0.5 mS/cm / High EC',
    desc: 'Extracted coco peat is tested in our on-site lab using standardized 1:1.5 volume extraction methods to verify mineral salt leaching.',
    icon: Droplets,
  },
  {
    title: 'Rotary Trommel Sieve Grading',
    standard: '6mm - 12mm Sieve Mesh Filtering',
    desc: 'Continuous mechanical trommels filter out oversized woody particles, rocks, and sand while ensuring high fiber-to-pith balance.',
    icon: Layers,
  },
  {
    title: 'Tensile Spring Elasticity Testing',
    standard: '400+ MT High-Tensile Curled Rope',
    desc: 'Curled coir rope coils are inspected for uniform twist density, high elasticity, and bounce retention required by premium mattress brands.',
    icon: Cpu,
  },
]

export function ProcessPage() {
  return (
    <div className="page-process-view">
      {/* 1. Process Page Hero Banner */}
      <section className="process-page-hero">
        <div className="process-hero-glow" aria-hidden="true" />
        <div className="process-hero-container" data-aos="fade-up">
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Engineering & Manufacturing
          </span>
          <h1 className="process-hero-heading">
            Sustainable Coir Processing from <em>Husk to Global Export.</em>
          </h1>
          <p className="process-hero-sub">
            From hand-selected coconut plantations in Tamil Nadu through mechanized decortication, solar curing, and hydraulic export compression—discover our four-decade perfected zero-waste processing methodology.
          </p>

          <div className="process-hero-stats-row">
            <div className="process-hero-stat">
              <span className="stat-num">40+</span>
              <span className="stat-text">Years Production Mastery</span>
            </div>
            <div className="process-hero-stat">
              <span className="stat-num">4</span>
              <span className="stat-text">Specialized Processing Units</span>
            </div>
            <div className="process-hero-stat">
              <span className="stat-num">700 MT</span>
              <span className="stat-text">Monthly Capacity</span>
            </div>
            <div className="process-hero-stat">
              <span className="stat-num">100%</span>
              <span className="stat-text">Eco & Biodegradable</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reusable 6-Step Processing Journey Pipeline */}
      <ProcessSection isFullPage={true} />

      {/* 3. Detailed Quality Control & Lab Verification Standards */}
      <section className="process-qa-section section-pad" data-aos="fade-up">
        <div className="section-head-wrap">
          <div>
            <span className="liquid-badge">
              <ShieldCheck className="w-3.5 h-3.5" /> Quality Control
            </span>
            <h2 className="section-title">
              Rigorous Standards for <em>Global Reliability.</em>
            </h2>
          </div>
          <p className="section-subtitle">
            Our multi-stage verification ensures that every container leaving our Tamil Nadu facility satisfies strict agricultural quarantine and international mattress specifications.
          </p>
        </div>

        <div className="qa-checkpoints-grid" data-aos="fade-up">
          {qualityCheckpoints.map((cp, idx) => {
            const Icon = cp.icon
            return (
              <div key={idx} className="qa-checkpoint-card">
                <div className="qa-card-icon-wrap">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="qa-standard-badge">{cp.standard}</span>
                <h3 className="qa-checkpoint-title">{cp.title}</h3>
                <p className="qa-checkpoint-desc">{cp.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Production Facilities & Modern Machinery Showcase */}
      <section className="process-machinery-section section-pad" data-aos="fade-up">
        <div className="machinery-banner-card">
          <div className="machinery-content-side">
            <span className="liquid-badge">
              <FileCheck className="w-3.5 h-3.5" /> Factory Yard Capabilities
            </span>
            <h2 className="machinery-title">
              Mechanized Scale with <em>Artisanal Sorting.</em>
            </h2>
            <p className="machinery-desc">
              Operating across four dedicated manufacturing units in Dindigul, Tamil Nadu, we combine high-speed defibering drums, hydraulic tractor loaders, automatic curling machinery, and vast open sun-curing yards.
            </p>

            <ul className="machinery-features">
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Heavy hydraulic loaders handling hundreds of tons of raw husks daily</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>High-density 5:1 hydraulic presses for volumetric shipping savings</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Certified export container loading dock with fumigation compliance</span>
              </li>
            </ul>

            <div className="machinery-actions">
              <Link to="/contact" className="button button-accent">
                <span>Book Factory Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="button button-outline">
                <span>View Factory Galleries</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProcessPage
