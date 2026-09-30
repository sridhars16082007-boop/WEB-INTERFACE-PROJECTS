import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="footer-brand">☁ Sridhar.</Link>
          <p>Learning, building and exploring technology one project at a time.</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Sridhar</p>
      </div>
    </footer>
  )
}

export default Footer
