import { useState } from 'react'
import { products } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { ArrowUpRight, Check, Sparkles, ChevronDown } from 'lucide-react'

function ProductCardItem({ product, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="product-card-wrapper"
    >
      <LiquidGlassCard className="modern-product-card" enableTilt={true}>
        {/* Product Media Area */}
        <div className="product-media-zone">
          <img
            src={product.image}
            alt={product.title}
            className="product-showcase-img"
            loading="lazy"
          />
          <span className="product-category-pill">{product.tag}</span>
          <span className="product-idx-pill">#{product.number}</span>
        </div>

        {/* Product Info Area */}
        <div className="product-content-zone">
          <div className="product-header-block">
            <h3 className="product-card-heading">{product.title}</h3>
            <p className="product-benefit-tag">{product.benefit}</p>
          </div>

          {/* Collapsible Description Area */}
          <div
            id={`product-desc-${product.id}`}
            className={`product-description-wrap ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
          >
            <p className="product-summary-text">{product.text}</p>

            {/* Details List from thaiagam.com */}
            <ul className="product-bullets">
              {product.details.map((detail) => (
                <li key={detail}>
                  <Check className="bullet-check-icon" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {!isExpanded && <div className="product-desc-fade" aria-hidden="true" />}
          </div>

          {/* Mobile Half-Collapsible Toggle Button */}
          <button
            type="button"
            className="product-expand-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`product-desc-${product.id}`}
            aria-label={isExpanded ? `Show less details for ${product.title}` : `Read more details for ${product.title}`}
          >
            <span>{isExpanded ? 'Show Less' : 'Read More Details'}</span>
            <ChevronDown className={`expand-chevron-icon ${isExpanded ? 'is-rotated' : ''}`} />
          </button>

          {/* Action CTA */}
          <a
            className="product-inquire-btn"
            href="#contact"
            aria-label={`Inquire about ${product.title}`}
          >
            <span>Inquire Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </LiquidGlassCard>
    </div>
  )
}

export function ProductSection() {
  return (
    <section className="products-section section-pad" id="products">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Our Products
          </span>
          <h2 className="section-title">
            Qualitative Range of <em>Coir Fibre Products.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Manufactured using present-day innovation. 100% eco-friendly and biodegradable materials produced for leading Indian mattress companies and worldwide export.
        </p>
      </div>

      <div className="product-card-grid product-grid-3col">
        {products.map((product, index) => (
          <ProductCardItem key={product.number} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}

