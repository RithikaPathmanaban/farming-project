import { useState } from 'react'
import { products } from '../content'
import { LiquidGlassCard } from './LiquidGlassCard'
import { ArrowUpRight, Check, Sparkles, SlidersHorizontal, LayoutGrid, Table, CheckCircle2 } from 'lucide-react'

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
    spec: 'Moisture Content',
    coirRope: '< 15% Max (Solar Dried)',
    fibreBales: '< 14% (Strictly Checked)',
    coirPeat: '< 18% (Compressed 5kg Blocks)',
  },
  {
    spec: 'Electrical Conductivity (EC)',
    coirRope: 'Natural Raw Level',
    fibreBales: 'Natural Raw Level',
    coirPeat: 'High EC & Low EC (< 0.5 mS/cm)',
  },
  {
    spec: 'Monthly Supply Capacity',
    coirRope: '400+ Metric Tons',
    fibreBales: '300+ Metric Tons',
    coirPeat: '700+ Metric Tons',
  },
  {
    spec: 'Export Packaging',
    coirRope: 'High-Density Coils with strapping',
    fibreBales: '100-120 KG Plastic Strapped Bales',
    coirPeat: '5KG Compressed Blocks / Palletized',
  },
]

export function ProductSection() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [viewMode, setViewMode] = useState('cards') // 'cards' | 'specs'

  const filteredProducts =
    selectedFilter === 'all'
      ? products
      : products.filter((p) => p.tag.toLowerCase().includes(selectedFilter.toLowerCase()))

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

      {/* Interactive Control Bar: Category Tabs + View Switcher */}
      <div className="product-stage-controls" data-aos="fade-up" data-aos-delay="50">
        {/* Category Filter Pills */}
        <div className="product-category-filters" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'all'}
            className={`stage-filter-btn ${selectedFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All Products ({products.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'rope'}
            className={`stage-filter-btn ${selectedFilter === 'rope' ? 'is-active' : ''}`}
            onClick={() => setSelectedFilter('rope')}
          >
            Curled Coir Rope
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'fibre'}
            className={`stage-filter-btn ${selectedFilter === 'fibre' ? 'is-active' : ''}`}
            onClick={() => setSelectedFilter('fibre')}
          >
            Fibre Bales
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedFilter === 'peat'}
            className={`stage-filter-btn ${selectedFilter === 'peat' ? 'is-active' : ''}`}
            onClick={() => setSelectedFilter('peat')}
          >
            Coir Peat
          </button>
        </div>

        {/* View Switcher: Visual Cards vs Technical Specs Matrix */}
        <div className="product-view-switcher">
          <button
            type="button"
            className={`view-switch-btn ${viewMode === 'cards' ? 'active' : ''}`}
            onClick={() => setViewMode('cards')}
            title="Visual Showcase Cards"
            aria-label="Switch to Visual Showcase Cards"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Showcase</span>
          </button>
          <button
            type="button"
            className={`view-switch-btn ${viewMode === 'specs' ? 'active' : ''}`}
            onClick={() => setViewMode('specs')}
            title="Technical Lab Specifications Matrix"
            aria-label="Switch to Technical Specifications Matrix"
          >
            <Table className="w-4 h-4" />
            <span>Spec Matrix</span>
          </button>
        </div>
      </div>

      {/* Mode A: Visual Product Cards with 3D Tilt */}
      {viewMode === 'cards' && (
        <div className={`product-card-grid product-grid-3col ${filteredProducts.length === 1 ? 'is-single-item' : ''}`} data-aos="fade-up" data-aos-delay="100">
          {filteredProducts.map((product, index) => (
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

                  <div className="product-description-wrap">
                    <p className="product-summary-text">{product.text}</p>

                    <ul className="product-bullets">
                      {product.details.map((detail, dIdx) => (
                        <li key={dIdx}>
                          <Check className="bullet-check-icon" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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
          ))}
        </div>
      )}

      {/* Mode B: Technical Specifications Matrix (Unique interactive comparison UI) */}
      {viewMode === 'specs' && (
        <div className="product-specs-table-card" data-aos="fade-up" data-aos-delay="100">
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
