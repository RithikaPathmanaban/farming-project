import { AboutSection } from '../components/AboutSection'
import { HeritageGauges } from '../components/HeritageGauges'
import { ProofSection } from '../components/ProofSection'
import { contactInfo } from '../content'
import { Sparkles, CheckCircle2, Factory, Award, Users, Globe, ArrowRight, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="page-about-view">
      {/* 1. About Hero Section */}
      <section className="about-page-hero">
        <div className="about-hero-backdrop-glow" aria-hidden="true" />
        <div className="about-hero-container" data-aos="fade-up">
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Established 1972
          </span>
          <h1 className="about-hero-title">
            Over Four Decades of <em>Coir Heritage & Trust.</em>
          </h1>
          <p className="about-hero-desc">
            Founded in 1972 under the visionary stewardship of {contactInfo.leaders}, Thaiagam Group of Companies has grown from an artisanal coir mill in Dindigul, Tamil Nadu into one of India’s most trusted global exporters of natural coir fiber, curled rope, and coco peat.
          </p>
        </div>
      </section>

      {/* 2. Philosophy & Heritage Gauges Cluster */}
      <section className="statement-banner section-pad" data-aos="fade-up">
        <div className="statement-inner">
          <div className="statement-left-col">
            <span className="liquid-badge">
              <Award className="w-3.5 h-3.5" /> Heritage Pillars
            </span>
            <h2 className="statement-headline">
              Crafted by Experience, <em>Driven by Modern Machinery.</em>
            </h2>
            <p className="statement-body">
              For over 40 years, our philosophy has centered on zero-waste coconut husk upcycling, uncompromised moisture control, and long-term partnerships with leading domestic mattress makers and overseas agricultural importers.
            </p>

            <ul className="statement-key-points">
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Four dedicated processing facilities covering all stages of coir extraction</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Leader in supplying India’s premier spring and rubberized mattress brands</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Export footprint spanning European countries, Australia, China, and beyond</span>
              </li>
            </ul>

            <div className="statement-action-wrap">
              <Link to="/contact" className="button button-accent">
                <span>Inquire with Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="statement-secondary-link">
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="statement-right-col" data-aos="fade-left" data-aos-delay="100">
            <HeritageGauges />
          </div>
        </div>
      </section>

      {/* 3. Factory Stories & Interactive Unit Inspection Console */}
      <AboutSection />

      {/* 4. Proof Stats & Group Capacity */}
      <ProofSection />

      {/* 5. Global Export Network */}
      <section className="about-export-section section-pad" data-aos="fade-up">
        <div className="export-banner-card">
          <div className="export-icon-badge">
            <Globe className="w-8 h-8 text-accent" />
          </div>
          <h2 className="export-headline">Global Distribution & Seaworthy Logistics</h2>
          <p className="export-sub">
            Serving agricultural distributors, greenhouse operators, and mattress manufacturers across {contactInfo.exportMarkets}.
          </p>
          <div className="export-tags-wrap">
            <span className="export-tag">European Union</span>
            <span className="export-tag">Australia</span>
            <span className="export-tag">China</span>
            <span className="export-tag">United Kingdom</span>
            <span className="export-tag">Middle East</span>
            <span className="export-tag">North America</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
