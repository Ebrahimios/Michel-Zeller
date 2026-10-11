import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/buy', label: 'Gallery' },
  { to: '/about', label: 'Michel Zeller' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg container py-2" aria-label="Main navigation">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={closeMenu}>
          <img src="/images/optimized/Logo.webp" alt="" width="46" height="46" />
          <span>Michel Zeller</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                end={end}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}