import { factoryStories } from '../content'

export function AboutSection() {
  return (
    <section className="about-factories section-pad" id="about">
      <div className="about-heading reveal-up"><p className="eyebrow">About us</p><h2>Two factories. One commitment to <em>better coir.</em></h2><p>From fibre preparation to export-ready coco peat, our facilities turn coconut by-products into dependable materials for industries and growers around the world.</p></div>
      <div className="factory-text-grid">{factoryStories.map((factory, index) => <article className="factory-copy reveal-up" style={{ '--delay': `${index * 180}ms` }} key={factory.number}><div><p className="factory-label">Our factory</p><h3>{factory.title}</h3><p>{factory.text}</p><a className="text-link text-link-light" href="#contact">Talk to our team <span>↗</span></a></div></article>)}</div>
      <div className="factory-gallery-stack">{factoryStories.map((factory) => <section className="factory-gallery" key={factory.number}><div className="factory-gallery-heading"><h3>{factory.galleryTitle}</h3></div><div className="factory-gallery-grid">{factory.images.map((image, imageIndex) => <div className="factory-gallery-image reveal-up" style={{ '--delay': `${imageIndex * 90}ms` }} key={image}><img src={image} alt={`${factory.galleryTitle} view ${imageIndex + 1}`} loading="lazy" /></div>)}</div></section>)}</div>
    </section>
  )
}
