import './App.css'
import { useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProductSection } from './components/ProductSection'
import { ProofSection } from './components/ProofSection'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <Hero />
      <AboutSection />
      <section className="statement section-pad reveal-up" id="story">
        <p className="eyebrow">The material between</p>
        <h2>Better growing starts with a material that knows where it <em>came from.</em></h2>
        <div className="statement-meta"><p>We transform a generous agricultural byproduct into dependable fibre systems for growers, manufacturers, and the landscapes between them.</p><a className="text-link" href="#about">Meet the company <span>↘</span></a></div>
      </section>
      <ProductSection />
      <ProofSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
