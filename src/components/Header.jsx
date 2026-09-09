import { useEffect, useState } from 'react'
import { navigationItems } from '../content'

export function Header({ menuOpen, onToggleMenu, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Thaiagam home"><span className="brand-mark">th</span><span>THAIAGAM</span></a>
      <button className="menu-toggle" onClick={onToggleMenu} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}><span className="menu-icon" aria-hidden="true"><i /><i /></span><span>{menuOpen ? 'Close' : 'Menu'}</span></button>
      <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navigationItems.map(([label, href]) => <a href={href} onClick={onNavigate} key={href}>{label}</a>)}
      </nav>
      <a className="header-cta button button-small" href="#contact">Start a conversation <span>↗</span></a>
    </header>
  )
}
