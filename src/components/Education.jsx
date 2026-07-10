export default function Education() {
  return (
    <section id="education" style={{ background: '#0a0f1e' }}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
        <div className="edu-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src="/logos/Arid.svg" alt="PMAS Arid Agriculture University" style={{ height: 50, width: 'auto', flexShrink: 0 }} />
            <div>
              <h3 style={{ marginBottom: 2 }}>BS Software Engineering</h3>
              <p className="meta">PMAS Arid Agriculture University, Rawalpindi</p>
            </div>
          </div>
          <span className="year">2024</span>
        </div>
      </div>
    </section>
  )
}
