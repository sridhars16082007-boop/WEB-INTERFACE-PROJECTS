import { Link } from 'react-router-dom'

const projects = [
  {
    number: '01',
    title: 'PocketSmart AI',
    description: 'A budget and recommendation assistant concept that combines a web interface, backend API, database and AI-generated explanations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'FastAPI', 'SQLite', 'Gemini'],
    icon: '☁',
  },
  {
    number: '02',
    title: 'CineBook',
    description: 'A movie booking interface concept with movie discovery, seat selection, booking flow and digital ticket ideas.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: '▶',
  },
  {
    number: '03',
    title: 'Web Interface Projects',
    description: 'A collection of React practice projects covering forms, validation, components, routing and interactive user interfaces.',
    tags: ['React', 'JavaScript', 'CSS'],
    icon: '</>',
  },
]

function Projects() {
  return (
    <section className="section-page container">
      <div className="page-heading">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>Things I&apos;ve been <span>building.</span></h1>
        <p>Small projects are where I practice ideas, test technologies and learn from mistakes.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-visual">
              <span className="project-icon">{project.icon}</span>
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-footer">
                <span className="status-text">● Personal project</span>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-note">
        <div><span className="section-label">NEXT</span><h2>More projects will be added as I keep building.</h2></div>
        <Link className="ghost-btn" to="/contact">Get in touch</Link>
      </div>
    </section>
  )
}

export default Projects
