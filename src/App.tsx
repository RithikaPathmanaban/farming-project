import './App.css'
import { useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MethodSection } from './components/MethodSection'
import { ProductSection } from './components/ProductSection'
import { ProofSection } from './components/ProofSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <Hero />
      <section className="statement section-pad reveal-up">
        <p className="eyebrow">The TerraNook point of view</p>
        <h2>We believe the future of farming should feel <em>more natural,</em> not less.</h2>
        <div className="statement-meta"><span>01</span><p>From resilient soil to stronger roots, we design simple materials that help growers do more with what the earth already gives us.</p></div>
      </section>
      <ProductSection />
      <MethodSection />
      <ProofSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
