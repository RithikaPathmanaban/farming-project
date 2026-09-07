export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Natural systems / Better harvests</p>
        <h1>Good things<br /><em>take root.</em></h1>
        <p className="hero-intro">We make high-performance growing materials from the parts of agriculture that are too valuable to waste.</p>
        <a className="circle-link" href="#products" aria-label="Explore TerraNook products">Explore <span>↘</span></a>
      </div>
      <div className="hero-image-wrap">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=90" alt="Green seedling growing in rich soil" />
        <div className="hero-stamp"><span>Since</span><strong>1998</strong><span>Growing forward</span></div>
      </div>
      <div className="hero-foot"><span>01 — 03</span><span>Materials for a living planet</span><span className="scroll-note">Scroll to explore ↓</span></div>
    </section>
  )
}
