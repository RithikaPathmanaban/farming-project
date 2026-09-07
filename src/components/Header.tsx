type HeaderProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onNavigate: () => void
}

export function Header({ menuOpen, onToggleMenu, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="TerraNook home"><span className="brand-mark">tn</span><span>TerraNook</span></a>
      <button className="menu-toggle" onClick={onToggleMenu} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'} <span>↗</span></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#products" onClick={onNavigate}>What we grow</a>
        <a href="#method" onClick={onNavigate}>Our method</a>
        <a href="#contact" onClick={onNavigate}>Talk to us</a>
      </nav>
      <a className="header-cta" href="#contact">Start a conversation <span>↗</span></a>
    </header>
  )
}
