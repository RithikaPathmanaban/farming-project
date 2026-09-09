import { products } from '../content'

export function ProductSection() {
  return (
    <section className="products section-pad" id="products">
      <div className="section-heading"><div><p className="eyebrow">What we make</p><h2>Built for the <em>whole</em> growing season.</h2></div></div>
      <div className="product-grid">
        {products.map((product, index) => <article className={`product-card reveal-up product-card-${index + 1}`} style={{ '--delay': `${index * 120}ms` }} key={product.number}>
          <div className="product-image"><img src={product.image} alt={product.title} /><span>{product.tag}</span><div className="product-image-caption"><h3>{product.title}</h3><a href="#contact" aria-label={`Discuss ${product.title}`}><span>↗</span></a></div></div>
          <div className="product-info"><div><p className="product-category">{product.tag}</p><p className="product-description">{product.text}</p><strong>{product.benefit}</strong><ul className="product-details">{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><a className="product-cta" href="#contact" aria-label={`Learn more about ${product.title}`}>Discuss this solution <span>↗</span></a></div></div>
        </article>)}
      </div>
    </section>
  )
}
