import './App.css'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProductSection } from './components/ProductSection'
import { ServicesSection } from './components/ServicesSection'
import { ProofSection } from './components/ProofSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { LiquidGlassCard } from './components/LiquidGlassCard'
import { HeritageGauges } from './components/HeritageGauges'
import { ThemeModal, FloatingThemeTrigger, useThemeState } from './components/ThemeSwitcher'

import { contactInfo } from './content'
import { MessageCircle, ArrowUpRight, Sparkles, CheckCircle2, Award, Factory, TrendingUp, Leaf } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useThemeState()
  const [themeModalOpen, setThemeModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })

    const handleResize = () => {
      AOS.refresh()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="site-wrapper">
      {/* Dynamic Theme Atmospheric Ambient Glow Orbs */}
      <div className="theme-ambient-glow-orb orb-1" aria-hidden="true" />
      <div className="theme-ambient-glow-orb orb-2" aria-hidden="true" />
      <div className="theme-ambient-glow-orb orb-3" aria-hidden="true" />

      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onNavigate={() => setMenuOpen(false)}
      />


      <Hero />

      {/* Philosophy Statement Banner with Authentic Thaiagam Content */}
      <section className="statement-banner section-pad" id="story" data-aos="fade-up">
        <div className="statement-inner">
          {/* Left Column: Authentic Brand Heritage & Core Strengths */}
          <div className="statement-left-col">
            <span className="liquid-badge">
              <Sparkles className="w-3.5 h-3.5" /> Established Heritage
            </span>
            <h2 className="statement-headline">
              Thaiagam Group of Companies was <em>Since 1972.</em>
            </h2>
            <p className="statement-body">
              Thaiagam group of companies since 1972 has more than 40 years of experiences in coir products. Our group comprises of four units supplying qualitative coir fibre products, curled coir rope, and coir peat worldwide.
            </p>

            <ul className="statement-key-points">
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>40+ years of industrial experience in natural coir products</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Comprises four dedicated manufacturing and processing units</span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Supplying India’s leading mattress manufacturers & global export</span>
              </li>
            </ul>

            <div className="statement-action-wrap">
              <a className="button button-light" href="#contact">
                <span>Contact Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a className="statement-secondary-link" href="#products">
                <span>Explore Products</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Industrial Heritage Gauges Cluster */}
          <div className="statement-right-col" data-aos="fade-left" data-aos-delay="100">
            <HeritageGauges />
          </div>
        </div>
      </section>


      <AboutSection />

      <ServicesSection />

      <ProductSection />

      <ProofSection />

      <TestimonialsSection />

      <ContactSection />

      <Footer />

      {/* Floating WhatsApp Quick Contact using authentic phone number */}

      <a
        href={`https://wa.me/91${contactInfo.phones[0]}?text=Hello%20Thaiagam%20Group%2C%20I'd%20like%20to%20enquire%20about%20your%20coir%20products.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Thaiagam on WhatsApp"
      >
        <span className="whatsapp-pulse-ring" />
        <MessageCircle className="w-6 h-6" />
        <span className="whatsapp-tooltip">Chat with Thaiagam</span>
      </a>

      {/* Floating Quick Theme Switcher Pill (Bottom Left) */}
      <FloatingThemeTrigger
        onClick={() => setThemeModalOpen(true)}
        currentTheme={currentTheme}
      />

      {/* Atmospheric Theme Studio Modal */}
      <ThemeModal
        isOpen={themeModalOpen}
        onClose={() => setThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
      />
    </main>
  )
}

export default App
