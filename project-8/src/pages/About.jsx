import profilePhoto from '../assets/profile.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="section-page container">
      <div className="page-heading">
        <span className="eyebrow">ABOUT ME</span>
        <h1>A little more <span>about me.</span></h1>
        <p>This page is about the person behind the projects, not a list of resume entries.</p>
      </div>

      <div className="about-layout">
        <div className="about-image-card">
          <img src={profilePhoto} alt="Sridhar" />
          <div className="image-note">☁ curious about what happens behind the screen</div>
        </div>
        <div className="about-content">
          <span className="section-label">01 / WHO I AM</span>
          <h2>Learning technology by making things.</h2>
          <p>
            I&apos;m Sridhar, a Computer Science student interested in understanding how applications
            are designed, connected to databases and eventually deployed into real environments.
          </p>
          <p>
            My current interests are <strong>cloud computing, web development, DSA, DBMS and DevOps</strong>.
            I enjoy moving from a small idea to a working project and then learning what could be improved.
          </p>
          <div className="info-chips">
            <span>Computer Science</span><span>Problem Solving</span><span>Web Development</span><span>Cloud</span>
          </div>
          <Link className="text-link" to="/introduction">Read my journey →</Link>
        </div>
      </div>
    </section>
  )
}

export default About
