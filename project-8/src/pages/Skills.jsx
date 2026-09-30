const groups = [
  {
    icon: '⌘',
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router'],
  },
  {
    icon: '◇',
    title: 'Programming & DSA',
    items: ['Python', 'Java', 'Problem Solving', 'Data Structures', 'Algorithms'],
  },
  {
    icon: '▣',
    title: 'Database',
    items: ['SQL', 'DBMS', 'Relational Databases', 'Queries', 'Database Design'],
  },
  {
    icon: '☁',
    title: 'Cloud Computing',
    items: ['Cloud Fundamentals', 'AWS Concepts', 'Deployment Basics', 'Cloud Services'],
  },
  {
    icon: '⚙',
    title: 'DevOps',
    items: ['Git & GitHub', 'Linux Basics', 'Command Line', 'Deployment Concepts'],
  },
]

function Skills() {
  return (
    <section className="section-page container">
      <div className="page-heading">
        <span className="eyebrow">TECH STACK</span>
        <h1>Tools I&apos;m <span>learning and using.</span></h1>
        <p>This is a growing toolkit. I&apos;m focusing on understanding the fundamentals instead of collecting technologies.</p>
      </div>

      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-icon">{group.icon}</div>
            <h2>{group.title}</h2>
            <div className="skill-items">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="skill-philosophy">
        <span className="quote-mark">“</span>
        <div>
          <span className="section-label">LEARNING MINDSET</span>
          <h2>Learn the concept. Build something. Break it. Fix it. Repeat.</h2>
        </div>
      </div>
    </section>
  )
}

export default Skills
