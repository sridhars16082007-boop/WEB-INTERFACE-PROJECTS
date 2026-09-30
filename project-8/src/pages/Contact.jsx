import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-page container contact-page">
      <div className="page-heading">
        <span className="eyebrow">CONTACT</span>
        <h1>Let&apos;s start a <span>conversation.</span></h1>
        <p>Have a project idea, learning resource or collaboration in mind? Send a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-card cloud-contact">
            <span className="contact-big-icon">☁</span>
            <span className="section-label">OPEN TO CONNECTIONS</span>
            <h2>Always curious about technology and new ideas.</h2>
            <p>I&apos;m especially interested in conversations around web development, cloud computing, DSA, databases and DevOps.</p>
          </div>
          <div className="contact-card">
            <span className="section-label">LINKS</span>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="mailto:your-email@example.com">Email <span>↗</span></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
            <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          </div>
          <label>Subject<input type="text" name="subject" placeholder="What would you like to talk about?" required /></label>
          <label>Message<textarea name="message" rows="7" placeholder="Write your message..." required /></label>
          <button className="primary-btn submit-btn" type="submit">Send message <span>→</span></button>
          {submitted && <p className="success-message">Thanks! The form is working locally. Connect an email service later to receive submissions.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
