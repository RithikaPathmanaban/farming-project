import type { CSSProperties } from 'react'
import { products } from '../content'

export function ProductSection() {
  return (
    <section className="products section-pad" id="products">
      <div className="section-heading"><div><p className="eyebrow">What we make</p><h2>Built for the <em>whole</em> growing season.</h2></div><span className="section-index">02 / 05</span></div>
      <div className="product-grid">
        {products.map((product, index) => <article className="product-card reveal-up" style={{ '--delay': `${index * 120}ms` } as CSSProperties} key={product.number}>
          <div className="product-image"><img src={product.image} alt={product.title} /><span>{product.tag}</span></div>
          <div className="product-info"><span>{product.number}</span><h3>{product.title}</h3><p>{product.text}</p><a href="#contact" aria-label={`Learn more about ${product.title}`}>Learn more <span>↗</span></a></div>
        </article>)}
      </div>
    </section>
  )
}
