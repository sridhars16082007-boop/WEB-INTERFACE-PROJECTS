import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/introduction', label: 'Introduction' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link className="brand" to="/" aria-label="Sridhar home">
          <span className="brand-cloud">☁</span>
          <span>Sridhar<span className="brand-dot">.</span></span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
