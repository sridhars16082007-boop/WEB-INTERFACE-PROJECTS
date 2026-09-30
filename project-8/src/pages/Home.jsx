import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpg'

function Home() {
  return (
    <section className="home-page">
      <div className="cloud-orb orb-one" />
      <div className="cloud-orb orb-two" />
      <div className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="pulse" /> Computer Science Student</span>
          <h1>Building my path through <span>Web, Cloud &amp; DevOps.</span></h1>
          <p className="hero-text">
            Hi, I&apos;m Sridhar. I&apos;m a B.E. Computer Science student who enjoys learning how
            software, databases, cloud platforms and development tools work together.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/projects">Explore my projects <span>→</span></Link>
            <Link className="ghost-btn" to="/about">More about me</Link>
          </div>
          <div className="interest-strip">
            <span>☁ Cloud Computing</span>
            <span>⌘ DSA</span>
            <span>◈ Web</span>
            <span>▣ DBMS</span>
            <span>⚙ DevOps</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-glow" />
          <div className="photo-card">
            <div className="photo-topbar">
              <span className="status-dot" /> learning-mode.exe
              <span>•••</span>
            </div>
            <img src={profilePhoto} alt="Sridhar" className="profile-photo" />
            <div className="photo-caption">
              <div>
                <strong>Sridhar</strong>
                <span>Developer in progress</span>
              </div>
              <span className="cloud-badge">☁</span>
            </div>
          </div>
          <div className="floating-card floating-top">
            <span>☁</span>
            <div><strong>Cloud</strong><small>Exploring</small></div>
          </div>
          <div className="floating-card floating-bottom">
            <span>⚙</span>
            <div><strong>DevOps</strong><small>Learning</small></div>
          </div>
        </div>
      </div>

      <div className="container quick-grid">
        <div className="quick-card"><span>01</span><strong>Learn</strong><p>Understand concepts through study and practice.</p></div>
        <div className="quick-card"><span>02</span><strong>Build</strong><p>Turn ideas into practical web projects.</p></div>
        <div className="quick-card"><span>03</span><strong>Explore</strong><p>Keep discovering cloud and development tools.</p></div>
      </div>
    </section>
  )
}

export default Home
