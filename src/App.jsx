import './App.css'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ThemeModal, FloatingThemeTrigger, useThemeState } from './components/ThemeSwitcher'
import { contactInfo } from './content'
import { MessageCircle } from 'lucide-react'

// Page components
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'
import { ProcessPage } from './pages/ProcessPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      AOS.refresh()
    }, 200)
  }, [pathname])

  return null
}

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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <main className="site-wrapper">
        {/* Dynamic Theme Atmospheric Ambient Glow Orbs */}
        <div className="theme-ambient-glow-orb orb-1" aria-hidden="true" />
        <div className="theme-ambient-glow-orb orb-2" aria-hidden="true" />
        <div className="theme-ambient-glow-orb orb-3" aria-hidden="true" />

        {/* Global Multi-Page Header */}
        <Header
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen(!menuOpen)}
          onNavigate={() => setMenuOpen(false)}
          onOpenThemeModal={() => setThemeModalOpen(true)}
        />

        {/* Multi-Page Route Switcher */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Contact */}
        <a
          href={`https://wa.me/91${contactInfo.phones[0]}?text=Hello%20Thaiagam%20Group%2C%20I'd%20like%20to%20enquire%20about%20your%20coir%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-whatsapp-btn ${menuOpen ? 'is-hidden' : ''}`}
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
          hidden={menuOpen}
        />

        {/* Atmospheric Theme Studio Modal */}
        <ThemeModal
          isOpen={themeModalOpen}
          onClose={() => setThemeModalOpen(false)}
          currentTheme={currentTheme}
          onSelectTheme={setCurrentTheme}
        />
      </main>
    </BrowserRouter>
  )
}

export default App
