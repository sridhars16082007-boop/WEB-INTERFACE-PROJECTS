import { Link } from 'react-router-dom'

function Introduction() {
  return (
    <section className="section-page container">
      <div className="page-heading">
        <span className="eyebrow">MY JOURNEY</span>
        <h1>From learning basics to <span>building systems.</span></h1>
        <p>A simple introduction to what I&apos;m learning and where I want to explore next.</p>
      </div>

      <div className="journey-grid">
        <article className="journey-card featured">
          <span className="journey-number">01</span>
          <span className="section-label">START</span>
          <h2>Learning the foundations</h2>
          <p>I started with programming and web fundamentals, gradually becoming more comfortable with writing code and building small interfaces.</p>
        </article>
        <article className="journey-card">
          <span className="journey-number">02</span>
          <span className="section-label">BUILD</span>
          <h2>Learning through projects</h2>
          <p>Projects help me connect frontend interfaces, application logic and databases instead of learning every topic in isolation.</p>
        </article>
        <article className="journey-card">
          <span className="journey-number">03</span>
          <span className="section-label">EXPLORE</span>
          <h2>Looking toward cloud</h2>
          <p>Cloud computing and DevOps are areas I want to understand more deeply, especially how applications move from local development toward deployment.</p>
        </article>
      </div>

      <div className="learning-banner">
        <div>
          <span className="section-label">CURRENT FOCUS</span>
          <h2>Web development + DSA + DBMS + Cloud + DevOps</h2>
        </div>
        <Link className="primary-btn" to="/skills">See my skills →</Link>
      </div>
    </section>
  )
}

export default Introduction
