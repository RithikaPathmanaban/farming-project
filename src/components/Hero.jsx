export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal-up">
        <p className="eyebrow hero-kicker">Thaiagam / Since 1972</p>
        <div className="hero-panels" aria-label="Thaiagam group capabilities">
          <article className="hero-panel hero-panel-supply">
            <span className="panel-label">Supply</span>
            <p>Our group of companies supplies India&apos;s leading companies about <strong>400-700mt per month</strong>, and it is <em>100% eco-friendly.</em></p>
          </article>
          <article className="hero-panel hero-panel-products">
            <span className="panel-label">Coir Products</span>
            <p>One of the established names in the industry with <strong>40 years of experience</strong>, supplying a qualitative range of coir fibre products.</p>
          </article>
          <article className="hero-panel hero-panel-manufacture">
            <span className="panel-label">Manufacture</span>
            <p>The first grade manufacturer of coir fibre, <strong>100% biodegradable</strong>, produced using present-day innovation.</p>
          </article>
        </div>
        <p className="hero-intro">Four units. One living material. Coir products made for a better harvest and a healthier planet.</p>
        <div className="hero-actions"><a className="button button-light" href="#products">Explore solutions <span>↘</span></a><a className="text-link text-link-light" href="#about">About us <span>↘</span></a></div>
      </div>
      <div className="hero-image-wrap">
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=90" alt="Green seedling growing in rich soil" />
        <div className="hero-stamp"><span>Since</span><strong>1972</strong><span>Growing forward</span></div><div className="hero-coordinate">10° 18&apos; N<br />77° 33&apos; E</div>
      </div>
      <div className="hero-foot"><span>Materials for a living planet</span><span className="scroll-note">Scroll to explore ↓</span></div>
    </section>
  )
}
