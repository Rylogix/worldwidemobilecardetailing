import { NavLink } from 'react-router-dom'
import { business, navLinks } from '../data/siteContent'

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand" aria-label="Worldwide Mobile Car Detailing home">
          <img src={business.logo} alt={business.name} />
          <div>
            <p>{business.name}</p>
            <span>{business.tag}</span>
          </div>
        </NavLink>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-primary" href={`tel:${business.phoneRaw}`}>
            Call {business.phoneDisplay}
          </a>
        </nav>
        <button
          className="mobile-menu-btn"
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-primary" href={`tel:${business.phoneRaw}`}>
            Call / Text {business.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
