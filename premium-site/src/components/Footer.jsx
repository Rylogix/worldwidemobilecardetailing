import { NavLink } from 'react-router-dom'
import { business, navLinks } from '../data/siteContent'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{business.name}</h3>
          <p>Premium mobile detailing service that comes to you across Atlanta metro areas.</p>
          <a href={`tel:${business.phoneRaw}`}>{business.phoneDisplay}</a>
        </div>
        <div>
          <h4>Navigation</h4>
          <div className="footer-links">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <h4>Service Areas</h4>
          <ul>
            {business.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
