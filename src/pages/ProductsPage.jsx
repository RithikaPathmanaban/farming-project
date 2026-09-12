import { useState, useEffect } from 'react'
import { products, contactInfo } from '../content'
import {
  Leaf,
  ArrowRight,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Table,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Search,
  X,
  FileText,
  Info,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const technicalSpecsMatrix = [
  {
    param: 'Primary Application',
    coirRope: 'Spring Mattress & Automotive Cores',
    fibreBales: 'Needle Felt, Non-Woven & Mattresses',
    coirPeat: 'Horticulture, Greenhouses & Soil Blend',
  },
  {
    param: 'Material Composition',
    coirRope: '100% Mature Chestnut Coconut Fiber',
    fibreBales: 'Long Natural Bristle Coconut Fiber',
    coirPeat: 'Sieved Pith Dust & Fine Lignin Sponges',
  },
  {
    param: 'Moisture Tolerance',
    coirRope: '< 15% Optimal Sun Cured',
    fibreBales: '< 15% Maximum Sun Cured',
    coirPeat: '< 20% Export Moisture',
  },
  {
    param: 'Packaging & Form Factor',
    coirRope: 'Continuous Coils (~30-35 Kg)',
    fibreBales: 'Hydraulic Strapped Bales (120-130 Kg)',
    coirPeat: '5 Kg Compressed Blocks (~70-75L)',
  },
  {
    param: 'Electrical Conductivity (EC)',
    coirRope: 'Natural Raw Salt Resilient',
    fibreBales: 'Natural Raw Salt Impermeable',
    coirPeat: 'Low EC (< 0.5 mS/cm) & High EC',
  },
  {
    param: 'Monthly Production Yield',
    coirRope: '400+ Metric Tonnes / Month',
    fibreBales: 'Continuous Decortication Capacity',
    coirPeat: '700+ Metric Tonnes / Month',
  },
  {
    param: 'Biodegradability & Eco Safety',
    coirRope: '100% Biodegradable & Chemical-Free',
    fibreBales: '100% Organic Biodegradable',
    coirPeat: '100% Organic Soil Conditioner',
  },
]

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showSpecsTable, setShowSpecsTable] = useState(false)
  const [activeModalProduct, setActiveModalProduct] = useState(null)

  // Filter products by live search query
  const filteredProducts = products.filter((p) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true

    return (
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query) ||
      (p.text && p.text.toLowerCase().includes(query)) ||
      (p.applications && p.applications.some((app) => app.toLowerCase().includes(query)))
    )
  })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeModalProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeModalProduct])

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProduct(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Smooth scroll utility
  const scrollToCatalog = () => {
    const el = document.getElementById('catalog')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Open modal if target query is present in URL
  useEffect(() => {
    const queryPart = window.location.search
    const params = new URLSearchParams(queryPart)
    const target = params.get('target') || params.get('product')
    if (target) {
      const match = products.find((p) => p.id === target || p.number === target)
      if (match) {
        setActiveModalProduct(match)
      }
    }
  }, [])

  return (
    <div className="page-products-view">
      {/* 1. Products Hero Banner */}
      <section className="products-hero-banner">
        <div className="products-hero-backdrop-glow" aria-hidden="true" />

        <div className="products-hero-container">
          {/* Left Column: Commercial Headline & Action Triggers */}
          <div className="products-hero-left" data-aos="fade-right">
            <span className="products-hero-badge">
              <Leaf className="w-3.5 h-3.5 text-accent" />
              <span>Factory Direct Export · ISO Certified</span>
            </span>

            <h1 className="products-hero-title">
              Coco & Coir Products for <em>Growers, Industry & Civil Projects.</em>
            </h1>

            <p className="products-hero-desc">
              Thaiagam Group manufactures and exports high-tensile curled coir rope, long bristle fiber bales, and washed low-EC coco peat blocks from Tamil Nadu, India since 1972.
            </p>

            {/* Quick Stat Badges */}
            <div className="products-hero-stats-strip">
              <div className="hero-stat-pill">
                <span className="stat-pill-num">400+ MT</span>
                <span className="stat-pill-lbl">Curled Rope / Mo</span>
              </div>
              <div className="hero-stat-pill">
                <span className="stat-pill-num">700+ MT</span>
                <span className="stat-pill-lbl">Coco Peat / Mo</span>
              </div>
              <div className="hero-stat-pill">
                <span className="stat-pill-num">&lt; 0.5 EC</span>
                <span className="stat-pill-lbl">Low-Salt Substrates</span>
              </div>
              <div className="hero-stat-pill">
                <span className="stat-pill-num">40+ Yrs</span>
                <span className="stat-pill-lbl">Global Export</span>
              </div>
            </div>

            <div className="products-hero-cta-group">
              <button
                type="button"
                onClick={scrollToCatalog}
                className="button button-light"
              >
                <span>Browse Product Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/contact" className="button button-outline">
                <Mail className="w-4 h-4" />
                <span>Request Export Pricing</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Core Products Preview Showcase */}
          <div className="products-hero-quick-grid trio-grid" data-aos="fade-left" data-aos-delay="100">
            {products.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalProduct(item)}
                className="quick-product-card group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveModalProduct(item)}
              >
                <div className="quick-product-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="quick-product-img"
                    loading="lazy"
                  />
                  <div className="quick-product-overlay" />
                  <span className="quick-product-category-tag">{item.tag}</span>
                  <div className="quick-product-caption">
                    <h3 className="quick-product-title">{item.title}</h3>
                    <span className="quick-product-hint">
                      View Specs <ArrowUpRight className="w-3.5 h-3.5 inline ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Commercial Product Catalog (Sleek, Non-Clumsy 3-Card Grid) */}
      <section className="products-catalog-section section-pad" id="catalog">
        <div className="catalog-header-bar" data-aos="fade-up">
          <div>
            <span className="liquid-badge">
              <PackageCheck className="w-3.5 h-3.5" /> Export Catalog
            </span>
            <h2 className="section-title">
              Our Three Core <em>Coir Product Lines.</em>
            </h2>
            <p className="section-subtitle mt-2">
              Supplying 400-700 MT per month to India’s leading companies and global international markets.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="catalog-search-box">
            <Search className="w-4 h-4 catalog-search-icon" />
            <input
              type="text"
              placeholder="Search by name, grade, or use..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalog-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="catalog-search-clear"
                aria-label="Clear search query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3. Modern Commercial Product Cards (Clean, Spacious, No Clutter) */}
        {filteredProducts.length > 0 ? (
          <div className="comm-products-grid" data-aos="fade-up">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="comm-product-card"
              >
                {/* Visual Media Container */}
                <div
                  className="comm-card-media"
                  onClick={() => setActiveModalProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="comm-card-img"
                    loading="lazy"
                  />
                  <div className="comm-card-badges">
                    <span className="comm-idx-badge">#{product.number}</span>
                    <span className="comm-tag-badge">{product.tag}</span>
                  </div>
                  <div className="comm-media-hover-overlay">
                    <span className="comm-inspect-pill">
                      <FileText className="w-3.5 h-3.5" /> View Technical Specs
                    </span>
                  </div>
                </div>

                {/* Card Body Information */}
                <div className="comm-card-body">
                  <div className="comm-card-header">
                    <span className="comm-category-label">{product.category}</span>
                    <h3
                      className="comm-card-title"
                      onClick={() => setActiveModalProduct(product)}
                    >
                      {product.title}
                    </h3>
                    <p className="comm-card-subtitle">{product.subtitle}</p>
                  </div>

                  {/* 3 Clean Key Highlights (No cluttered boxes, no unclickable tags!) */}
                  <ul className="comm-card-highlights-list">
                    {(product.highlights || product.details).slice(0, 3).map((item, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 className="w-4 h-4 text-sprout shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons Row */}
                  <div className="comm-card-actions">
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.title)}`}
                      className="button button-accent comm-inquire-btn"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Inquire Now</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="button button-outline comm-specs-btn"
                      title="View Lab Specifications & Applications"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Full Specs</span>
                    </button>

                    <a
                      href={`https://wa.me/91${contactInfo.phones[0]}?text=${encodeURIComponent(
                        `Hello Thaiagam Group, I would like to request export pricing and specifications for ${product.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comm-whatsapp-btn"
                      aria-label={`Chat about ${product.title} on WhatsApp`}
                      title="WhatsApp Instant Quote"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="comm-empty-state">
            <Info className="w-12 h-12 text-accent mb-3" />
            <h3 className="text-xl font-bold">No products match your search</h3>
            <p className="text-sm text-muted mt-1 mb-4">
              Try searching with different keywords like &quot;coir&quot;, &quot;rope&quot;, or &quot;peat&quot;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="button button-accent"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* 4. Full Master Technical Matrix Comparison Table */}
        <div className="catalog-specs-matrix-wrapper" data-aos="fade-up">
          <button
            type="button"
            className={`matrix-toggle-button ${showSpecsTable ? 'is-open' : ''}`}
            onClick={() => setShowSpecsTable(!showSpecsTable)}
            aria-expanded={showSpecsTable}
          >
            <div className="flex items-center gap-3">
              <Table className="w-5 h-5 text-accent" />
              <span>
                {showSpecsTable
                  ? 'Hide Master Laboratory Specifications Matrix'
                  : 'Compare All 3 Core Products in Master Laboratory Specifications Matrix'}
              </span>
            </div>
            <ChevronDown className={`w-5 h-5 matrix-chevron ${showSpecsTable ? 'is-rotated' : ''}`} />
          </button>

          {showSpecsTable && (
            <div className="matrix-table-container" data-aos="fade-up">
              <div className="matrix-table-scroll-frame">
                <table className="catalog-matrix-table">
                  <thead>
                    <tr>
                      <th>Technical Parameter</th>
                      <th>Curled Coir Rope</th>
                      <th>Coir Fibre Bales</th>
                      <th>Coco Peat (5Kg Blocks)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalSpecsMatrix.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="td-param">{row.param}</td>
                        <td>{row.coirRope}</td>
                        <td>{row.fibreBales}</td>
                        <td>{row.coirPeat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="matrix-table-footer">
                <span>
                  All parameters verified in our Pollachi laboratory before container dispatch.
                </span>
                <Link to="/contact" className="matrix-footer-cta">
                  <span>Request Custom Specification Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 5. Custom OEM & Container Export Callout Banner */}
        <div className="products-closing-banner" data-aos="fade-up">
          <div className="closing-banner-inner">
            <span className="liquid-badge">
              <Sparkles className="w-3.5 h-3.5" /> Custom Manufacturing & Private Labeling
            </span>
            <h2 className="closing-banner-title">
              Need Custom Dimensions, Density, or Private Label Packaging?
            </h2>
            <p className="closing-banner-desc">
              We engineer tailored moisture profiles, custom coil diameters, branded grow bags, and customized bale dimensions for international distributors and large-scale industrial consumers.
            </p>
            <div className="closing-banner-actions">
              <Link to="/contact" className="button button-light">
                <span>Contact Export Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/91${contactInfo.phones[0]}?text=${encodeURIComponent(
                  "Hello Thaiagam Group, I'm inquiring about container-load custom OEM coir export."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Tech Specifications Modal Dialog */}
      {activeModalProduct && (
        <ProductSpecsModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </div>
  )
}

// --------------------------------------------------------------------------
// High-End Product Specifications Modal Component
// --------------------------------------------------------------------------
function ProductSpecsModal({ product, onClose }) {
  return (
    <div className="comm-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="comm-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          className="comm-modal-close-btn"
          onClick={onClose}
          aria-label="Close product specifications modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="comm-modal-grid">
          {/* Left Column: Visual & Quick Commercial Actions */}
          <div className="comm-modal-media-col">
            <div className="comm-modal-img-frame">
              <img
                src={product.image}
                alt={product.title}
                className="comm-modal-img"
              />
              <span className="comm-modal-tag-pill">{product.tag}</span>
            </div>

            <div className="comm-modal-media-trust">
              <div className="trust-item">
                <ShieldCheck className="w-4 h-4 text-sprout" />
                <span>100% Organic & Biodegradable</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Direct Factory Export from Pollachi</span>
              </div>
              <div className="trust-item">
                <PackageCheck className="w-4 h-4 text-sprout" />
                <span>FCL / LCL Container Loading Ready</span>
              </div>
            </div>

            <div className="comm-modal-side-actions">
              <Link
                to={`/contact?product=${encodeURIComponent(product.title)}`}
                onClick={onClose}
                className="button button-accent w-full"
              >
                <Mail className="w-4 h-4" />
                <span>Request Commercial Quotation</span>
              </Link>
              <a
                href={`https://wa.me/91${contactInfo.phones[0]}?text=${encodeURIComponent(
                  `Hello Thaiagam Group, please share export pricing and lab report for ${product.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-whatsapp w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Deep Lab Specifications & Applications */}
          <div className="comm-modal-details-col">
            <div className="comm-modal-header">
              <span className="comm-modal-cat-pill">{product.category}</span>
              <h2 className="comm-modal-title">{product.title}</h2>
              <p className="comm-modal-subtitle">{product.subtitle}</p>
            </div>

            {/* Overview Narrative */}
            <div className="comm-modal-section">
              <h4 className="comm-modal-section-title">Product Overview</h4>
              <p className="comm-modal-text">{product.text}</p>
            </div>

            {/* Technical Specifications Table */}
            {product.specs && (
              <div className="comm-modal-section">
                <h4 className="comm-modal-section-title">
                  <ShieldCheck className="w-4 h-4 text-accent inline mr-1.5" />
                  Factory Laboratory Specifications
                </h4>
                <div className="comm-modal-specs-table">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="modal-spec-row">
                      <span className="modal-spec-key">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="modal-spec-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {product.highlights && (
              <div className="comm-modal-section">
                <h4 className="comm-modal-section-title">Performance Highlights</h4>
                <ul className="comm-modal-checklist">
                  {product.highlights.map((hItem, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{hItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Industrial Applications */}
            {product.applications && (
              <div className="comm-modal-section">
                <h4 className="comm-modal-section-title">Industrial Applications</h4>
                <div className="comm-modal-apps-grid">
                  {product.applications.map((appItem, aIdx) => (
                    <div key={aIdx} className="modal-app-card">
                      <Zap className="w-3.5 h-3.5 text-sprout shrink-0" />
                      <span>{appItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
