import { useState } from 'react'
import { products } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { ArrowUpRight, Check, Sparkles, Table, CheckCircle2, ChevronDown } from 'lucide-react'

// Technical specifications comparison matrix
const productSpecsData = [
  {
    spec: 'Primary Application',
    coirRope: 'Spring Mattress & Rubberized Coir Pads',
    fibreBales: 'Needle Felt, Geo-textiles & Mattresses',
    coirPeat: 'Horticulture, Greenhouses & Soil Blend',
  },
  {
    spec: 'Fibre Thickness / Grade',
    coirRope: 'High-Tensile Twisted Curled',
    fibreBales: 'Natural Long Bristle & Mattress Mix',
    coirPeat: 'Fine Sieved Coupling Lignin Peat',
  },
  {
    spec: 'Moisture Tolerance',
    coirRope: '< 15% Max Sun Cured',
    fibreBales: '< 15% Optimal Low Moisture',
    coirPeat: '< 20% Export Grade Dry',
  },
  {
    spec: 'Packaging & Form Factor',
    coirRope: 'Continuous Coils (~30-35 Kg)',
    fibreBales: 'Hydraulic Strapped Bales (120-130 Kg)',
    coirPeat: '5 Kg Compressed Blocks / Loose Pallets',
  },
  {
    spec: 'Monthly Production Yield',
    coirRope: '400+ Metric Tonnes / Month',
    fibreBales: 'High Capacity Decortication Run',
    coirPeat: '700+ Metric Tonnes / Month',
  },
  {
    spec: 'Eco & Bio Compliance',
    coirRope: '100% Biodegradable & Natural',
    fibreBales: '100% Biodegradable Organic',
    coirPeat: '100% Organic Soil Conditioner',
  },
]

function ProductCardItem({ product }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div key={product.number} className="product-card-wrapper">
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

          {/* Collapsible Description & Specifications */}
          <div
            id={`product-desc-${product.number}`}
            className={`product-description-wrap ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
          >
            <p className="product-summary-text">{product.text}</p>

            <ul className="product-bullets">
              {product.details.map((detail, dIdx) => (
                <li key={dIdx}>
                  <Check className="bullet-check-icon" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {!isExpanded && <div className="product-desc-fade" aria-hidden="true" />}
          </div>

          {/* Collapsible Toggle Button */}
          <button
            type="button"
            className="product-expand-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`product-desc-${product.number}`}
            aria-label={isExpanded ? `Show less details for ${product.title}` : `Read more details for ${product.title}`}
          >
            <span>{isExpanded ? 'Show Less' : 'View Full Specifications'}</span>
            <ChevronDown className={`expand-chevron-icon ${isExpanded ? 'is-rotated' : ''}`} />
          </button>

          {/* Action CTA */}
          <a
            className="product-inquire-btn"
            href="#contact"
            aria-label={`Inquire about ${product.title}`}
          >
            <span>Inquire for Contract</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </LiquidGlassCard>
    </div>
  )
}

export function ProductSection() {
  const [showSpecs, setShowSpecs] = useState(false)

  return (
    <section className="products-section section-pad" id="products">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> Product Stage
          </span>
          <h2 className="section-title">
            Qualitative Range of <em>Coir Fibre Products.</em>
          </h2>
        </div>
        <p className="section-subtitle">
          Manufactured using modern innovation. 100% eco-friendly and biodegradable materials produced for leading Indian mattress companies and worldwide export.
        </p>
      </div>

      {/* Visual Product Cards (Display All Products) */}
      <div className="product-card-grid product-grid-3col" data-aos="fade-up" data-aos-delay="100">
        {products.map((product) => (
          <ProductCardItem key={product.number} product={product} />
        ))}
      </div>

      {/* Technical Lab Specifications Matrix (Expandable below products) */}
      <div className="product-specs-toggle-wrap" data-aos="fade-up">
        <button
          type="button"
          className={`specs-expand-btn ${showSpecs ? 'is-active' : ''}`}
          onClick={() => setShowSpecs(!showSpecs)}
          aria-expanded={showSpecs}
        >
          <Table className="w-4 h-4" />
          <span>{showSpecs ? 'Hide Technical Lab Spec Matrix' : 'Compare Full Technical Lab Specifications Matrix'}</span>
          <ChevronDown className={`w-4 h-4 specs-chevron ${showSpecs ? 'is-rotated' : ''}`} />
        </button>
      </div>

      {showSpecs && (
        <div className="product-specs-table-card" data-aos="fade-up" data-aos-delay="50">
          <div className="specs-table-wrapper">
            <table className="specs-matrix-table">
              <thead>
                <tr>
                  <th className="spec-head-property">Technical Parameter</th>
                  <th className="spec-head-col">Curled Coir Rope</th>
                  <th className="spec-head-col">Coir Fibre Bales</th>
                  <th className="spec-head-col">Coir Peat (Coco Pith)</th>
                </tr>
              </thead>
              <tbody>
                {productSpecsData.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="spec-row-label">
                      <strong>{row.spec}</strong>
                    </td>
                    <td className="spec-row-val">{row.coirRope}</td>
                    <td className="spec-row-val">{row.fibreBales}</td>
                    <td className="spec-row-val">{row.coirPeat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="specs-table-footer">
            <div className="specs-footer-note">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Custom moisture tolerances and EC test reports available upon contract confirmation.</span>
            </div>
            <a href="#contact" className="button button-small">
              <span>Request Full Lab Spec Sheet</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductSection
