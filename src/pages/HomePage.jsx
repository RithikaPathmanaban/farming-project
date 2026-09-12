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

export function HomePage() {
  return (
    <div className="page-home-view">
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Philosophy & Heritage Statement Banner */}
      <section className="statement-banner section-pad" id="story" data-aos="fade-up">
        <div className="statement-inner">
          <div className="statement-left-col">
            <span className="liquid-badge">
              <Sparkles className="w-3.5 h-3.5" /> Established Heritage
            </span>
            <h2 className="statement-headline">
              Thaiagam Group of Companies was <em>Since 1972.</em>
            </h2>
            <p className="statement-body">
              Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units supplying qualitative coir fibre products, curled coir rope, and coir peat worldwide.
            </p>

            <ul className="statement-key-points">
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>40+ years of industrial experience in natural coir products</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Comprises four dedicated manufacturing and processing units</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Supplying India’s leading mattress manufacturers & global export</span>
              </li>
            </ul>

            <div className="statement-action-wrap">
              <Link className="button button-accent statement-primary-btn" to="/contact">
                <span>Contact Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link className="statement-secondary-link" to="/products">
                <span>Explore Full Catalog</span>
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
              <PackageCheck className="w-3.5 h-3.5" /> Product Showcase
            </span>
            <h2 className="section-title">
              Export-Ready <em>Coir Solutions.</em>
            </h2>
          </div>
          <div className="section-head-action">
            <p className="section-subtitle">
              Engineered for resilience, high aeration, and strict international agricultural and mattress manufacturing standards.
            </p>
            <Link to="/products" className="view-all-products-link">
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3-Col Teaser Grid - Clean: ONLY Image and Name */}
        <div className="home-products-minimal-grid" data-aos="fade-up" data-aos-delay="100">
          {products.map((product) => (
            <Link
              key={product.number}
              to={`/products?target=${product.id}`}
              className="home-minimal-product-card group"
            >
              <div className="home-minimal-media">
                <img
                  src={product.image}
                  alt={product.title}
                  className="home-minimal-img"
                  loading="lazy"
                />
                <span className="home-minimal-number">#{product.number}</span>
                <span className="home-minimal-tag">{product.tag}</span>
              </div>

              <div className="home-minimal-caption">
                <h3 className="home-minimal-title">{product.title}</h3>
                <span className="home-minimal-link">
                  <span>Explore Product</span>
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
