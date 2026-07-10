export default function Skills() {
  return (
    <section id="skills" style={{ background: '#0a0f1e' }}>
      <div className="container">
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-subtitle">What I bring to the table</p>

        <div className="skills-grid">
          <div className="skill-cat">
            <h3>Testing Disciplines</h3>
            <div className="tags">
              {['Manual Testing','Automation (Cypress)','Load Testing (JMeter)','API Testing (Postman)','Website Testing','Mobile App Testing','Bug Reporting','Regression Testing','Sanity Testing','Smoke Testing','Stress Testing','Black Box Testing','Impact Analysis','Test Plan/Design','Acceptance Testing','UI/UX Testing','Agile/Scrum'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <div className="skill-cat">
            <h3>Tools &amp; Technologies</h3>
            <div className="tags">
              {['JIRA','Trello','Slack','Figma','Chrome DevTools','Android Emulator','Cypress','JMeter','Postman'].map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
          <div className="skill-cat">
            <h3>Expertise Highlights</h3>
            <ul className="expertise-list">
              <li>End-to-end QA lifecycle: requirement analysis → test planning → execution → bug tracking → regression</li>
              <li>Automation scripting with Cypress</li>
              <li>API testing &amp; validation with Postman</li>
              <li>Performance/load testing with JMeter (5,000–7,000 concurrent users)</li>
              <li>Cross-platform testing: web, desktop, mobile, IoT-connected devices</li>
              <li>Agile/Scrum collaboration with devs, PMs, and stakeholders</li>
              <li>Post-release impact analysis for release stability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
