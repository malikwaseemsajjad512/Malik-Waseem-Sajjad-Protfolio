export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1>Malik Waseem <span>Sajjad</span></h1>
          <p className="subtitle">AI-oriented Software Quality Assurance Engineer</p>
          <div className="cta-btns">
            <a href="#experience" className="btn-primary">View Experience</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
            <a href="/resume/Waseem_Sajjad_SQA_Resume.pdf" download className="btn-outline">Download Resume</a>
          </div>
          <p style={{ marginTop: 16, color: '#64748b', fontSize: '0.9rem' }}>
            📍 Lahore, Pakistan
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-circle circle-sqa">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 8L12 20v16c0 18.64 11.6 36.08 28 40 16.4-3.92 28-21.36 28-40V20L40 8z" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5"/>
              <path d="M30 42l8 8 16-20" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="20" cy="26" r="3" fill="#7dd3fc" opacity="0.6"/>
              <circle cx="60" cy="28" r="2.5" fill="#7dd3fc" opacity="0.4"/>
              <circle cx="50" cy="18" r="2" fill="#7dd3fc" opacity="0.3"/>
            </svg>
          </div>
          <div className="hero-circle circle-photo">
            <img src="/images/IMG_043900.jpg" alt="Waseem Sajjad" />
          </div>
        </div>
      </div>
    </section>
  )
}
