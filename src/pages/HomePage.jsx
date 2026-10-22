import { Hero } from '../components/Hero'
import { HeritageGauges } from '../components/HeritageGauges'
import { ServicesSection } from '../components/ServicesSection'
import { ProcessSection } from '../components/ProcessSection'
import { ProofSection } from '../components/ProofSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactSection } from '../components/ContactSection'
import { products } from '../content'
import { LiquidGlassCard } from '../components/LiquidGlassCard'
import { Sparkles, CheckCircle2, ArrowUpRight, ArrowRight, PackageCheck, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../components/LanguageTranslator'

export function HomePage() {
  const { brand, t } = useLanguage()

  return (
    <div className="page-home-view">
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Philosophy & Heritage Statement Banner */}
      <section className="statement-banner section-pad" id="story" data-aos="fade-up">
        <div className="statement-inner">
          <div className="statement-left-col">
            <span className="liquid-badge">
              <Sparkles className="w-3.5 h-3.5" /> {t.statement?.badge || 'Established Heritage'}
            </span>
            <h2 className="statement-headline">
              <span className="notranslate" translate="no">{brand.name}</span> {t.statement?.headlinePrefix ? `${t.statement.headlinePrefix} ` : ''}<em>{t.statement?.headlineEmphasis || 'Since 1972.'}</em>
            </h2>
            <p className="statement-body">
              {brand.aboutDesc}
            </p>

            <ul className="statement-key-points">
              {(t.statement?.points || [
                '40+ years of industrial experience in natural coir products',
                'ISO Certified & 1 Star Category Certificate Status Holder Exporter',
                'Comprises four dedicated manufacturing and processing units',
                'Export footprint spanning China, Europe, Australia, Turkey & beyond',
              ]).map((point, pIdx) => (
                <li key={pIdx}>
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="statement-action-wrap">
              <Link className="button button-accent statement-primary-btn" to="/contact">
                <span>{t.statement?.btnContact || 'Contact Now'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link className="statement-secondary-link" to="/products">
                <span>{t.statement?.btnCatalog || 'Explore Full Catalog'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="statement-right-col" data-aos="fade-left" data-aos-delay="100">
            <HeritageGauges />
          </div>
        </div>
      </section>

      {/* 3. Featured Products Showcase Teaser */}
      <section className="featured-products-teaser section-pad" id="featured-products">
        <div className="section-head-wrap" data-aos="fade-up">
          <div>
            <span className="liquid-badge">
              <PackageCheck className="w-3.5 h-3.5" /> {t.statement?.showcaseBadge || 'Product Showcase'}
            </span>
            <h2 className="section-title">
              {t.statement?.showcaseTitle || 'Export-Ready'} <em>{t.statement?.showcaseEmphasis || 'Coir Solutions.'}</em>
            </h2>
          </div>
          <div className="section-head-action">
            <p className="section-subtitle">
              {t.statement?.showcaseSubtitle || 'Engineered for resilience, high aeration, and strict international agricultural and mattress manufacturing standards.'}
            </p>
            <Link to="/products" className="view-all-products-link">
              <span>{t.statement?.btnCatalog || 'View Full Catalog'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3-Col Teaser Grid - Clean: ONLY Image and Name */}
        <div className="home-products-minimal-grid" data-aos="fade-up" data-aos-delay="100">
          {products.map((product, idx) => (
            <Link
              key={product.number}
              to={`/products?target=${product.id}`}
              className="home-minimal-product-card group"
            >
              <div className="home-minimal-media">
                <img
                  src={product.image}
                  alt={t.products.items?.[idx]?.title || product.title}
                  className="home-minimal-img"
                  loading="lazy"
                />
                <span className="home-minimal-number">#{product.number}</span>
                <span className="home-minimal-tag">{t.products.items?.[idx]?.tag || product.tag}</span>
              </div>

              <div className="home-minimal-caption">
                <h3 className="home-minimal-title">{t.products.items?.[idx]?.title || product.title}</h3>
                <span className="home-minimal-link">
                  <span>{t.statement?.exploreProduct || 'Explore Product'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Factory Infrastructure & Operations */}
      <ServicesSection />

      {/* 5. Process Pipeline (From Coconut to Premium Product) */}
      <ProcessSection />

      {/* 6. Proof & Testimonials */}
      <ProofSection />
      <TestimonialsSection />

      {/* 7. Contact Section */}
      <ContactSection />
    </div>
  )
}

export default HomePage
