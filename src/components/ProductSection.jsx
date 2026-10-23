import { useState } from 'react'
import { products } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { ArrowUpRight, Check, Sparkles, Table, CheckCircle2, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageTranslator'

// Technical specifications comparison matrix
const productSpecsData = [
  {
    spec: 'Primary Application',
    growBags: 'Commercial Greenhouse Hydroponics',
    cocoPots: 'Root Training & Nursery Saplings',
    huskChips: 'Orchids, Anthuriums & Aeration',
    coirPeat: 'Horticulture, Potting & Greenhouses',
    fibreBales: 'Needle Felt, Geo-textiles & Mattresses',
    coirRope: 'Spring Mattress & Rubberized Coir Pads',
  },
  {
    spec: 'Material & Texture',
    growBags: '70/30 or 50/50 Washed Peat/Chips',
    cocoPots: 'Natural Coir Fibre + Natural Latex',
    huskChips: '8 – 20 mm Uniform Cut Husk Chips',
    coirPeat: 'Fine Sieved Absorbent Lignin Pith',
    fibreBales: 'Long Natural Bristle Golden Fiber',
    coirRope: 'High-Tensile Machine-Curled Twist',
  },
  {
    spec: 'Moisture Tolerance',
    growBags: '< 18% Moisture Controlled',
    cocoPots: 'Dry Mold-Resistant Shell',
    huskChips: '< 18% Sun Cured Low Moisture',
    coirPeat: '< 20% Export Grade Dry',
    fibreBales: '< 15% Optimal Low Moisture',
    coirRope: '< 15% Max Sun Cured',
  },
  {
    spec: 'Packaging & Form Factor',
    growBags: 'UV-Treated Poly Sleeves (100cm)',
    cocoPots: 'Molded Pots (3" to 12" Sizes)',
    huskChips: '5 Kg Compressed Blocks (~5:1)',
    coirPeat: '5 Kg Compressed Blocks (~70-75L)',
    fibreBales: 'Hydraulic Strapped Bales (120-130 Kg)',
    coirRope: 'Continuous Coils (~30-35 Kg)',
  },
  {
    spec: 'Electrical Conductivity (EC)',
    growBags: 'Low EC (< 0.5 mS/cm) & Buffered',
    cocoPots: 'Natural Organic Low Salt',
    huskChips: 'Low EC (< 0.5 mS/cm) Washed',
    coirPeat: 'Low EC (< 0.5 mS/cm) & High EC',
    fibreBales: 'Natural Raw Salt Resilient',
    coirRope: 'Natural Raw Salt Resilient',
  },
  {
    spec: 'Eco & Bio Compliance',
    growBags: '100% Organic Soil-Less Substrate',
    cocoPots: '100% Biodegradable in Soil',
    huskChips: '100% Natural Organic Chips',
    coirPeat: '100% Organic Soil Conditioner',
    fibreBales: '100% Biodegradable Organic',
    coirRope: '100% Biodegradable & Natural',
  },
]

function ProductCardItem({ product, index = 0, t }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const localized = t?.products?.items?.[index]
  const title = localized?.title || product.title
  const tag = localized?.tag || product.tag
  const summaryText = localized?.text || product.text
  const benefit = localized?.subtitle || product.benefit

  return (
    <div key={product.number} className="product-card-wrapper">
      <LiquidGlassCard className="modern-product-card" enableTilt={true}>
        {/* Product Media Area */}
        <div className="product-media-zone">
          <img
            src={product.image}
            alt={title}
            className="product-showcase-img"
            loading="lazy"
          />
          <span className="product-category-pill">{tag}</span>
          <span className="product-idx-pill">#{product.number}</span>
        </div>

        {/* Product Info Area */}
        <div className="product-content-zone">
          <div className="product-header-block">
            <h3 className="product-card-heading">{title}</h3>
            <p className="product-benefit-tag">{benefit}</p>
          </div>

          {/* Collapsible Description & Specifications */}
          <div
            id={`product-desc-${product.number}`}
            className={`product-description-wrap ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
          >
            <p className="product-summary-text">{summaryText}</p>

            <ul className="product-bullets">
              {(localized?.highlights || product.details).map((detail, dIdx) => (
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
            aria-label={isExpanded ? `Show less details for ${title}` : `Read more details for ${title}`}
          >
            <span>{isExpanded ? 'Show Less' : (t?.products?.btnDetails || 'View Full Specifications')}</span>
            <ChevronDown className={`expand-chevron-icon ${isExpanded ? 'is-rotated' : ''}`} />
          </button>

          {/* Action CTA */}
          <Link
            className="product-inquire-btn"
            to={`/contact?product=${encodeURIComponent(title)}`}
            aria-label={`Inquire about ${title}`}
          >
            <span>{t?.products?.btnEnquire || 'Inquire for Contract'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </LiquidGlassCard>
    </div>
  )
}

export function ProductSection() {
  const [showSpecs, setShowSpecs] = useState(false)
  const { t } = useLanguage()

  return (
    <section className="products-section section-pad" id="products">
      <div className="section-head-wrap" data-aos="fade-up">
        <div>
          <span className="liquid-badge">
            <Sparkles className="w-3.5 h-3.5" /> {t.products.badge}
          </span>
          <h2 className="section-title">
            {t.products.title} <em>{t.products.titleEmphasis}</em>
          </h2>
        </div>
        <p className="section-subtitle">
          {t.products.subtitle}
        </p>
      </div>

      {/* Visual Product Cards (Display All Products) */}
      <div className="product-card-grid product-grid-3col" data-aos="fade-up" data-aos-delay="100">
        {products.map((product, idx) => (
          <ProductCardItem key={product.number} product={product} index={idx} t={t} />
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
                  <th className="spec-head-col">Grow Bags</th>
                  <th className="spec-head-col">Coco Pots</th>
                  <th className="spec-head-col">5kg Husk Chips</th>
                  <th className="spec-head-col">Coco Peat (5kg)</th>
                  <th className="spec-head-col">Coir Fibre Bales</th>
                  <th className="spec-head-col">Curled Coir Rope</th>
                </tr>
              </thead>
              <tbody>
                {productSpecsData.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className="spec-row-label">
                      <strong>{row.spec}</strong>
                    </td>
                    <td className="spec-row-val">{row.growBags}</td>
                    <td className="spec-row-val">{row.cocoPots}</td>
                    <td className="spec-row-val">{row.huskChips}</td>
                    <td className="spec-row-val">{row.coirPeat}</td>
                    <td className="spec-row-val">{row.fibreBales}</td>
                    <td className="spec-row-val">{row.coirRope}</td>
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
            <Link to="/contact" className="button button-small">
              <span>Request Full Lab Spec Sheet</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductSection
