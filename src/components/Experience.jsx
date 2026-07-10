const jobs = [
  {
    logo: '/logos/Crewlogix.svg',
    company: 'Crewlogix Technologies — Lahore, Pakistan',
    date: 'May 2026 – Present',
    title: 'Software Quality Assurance Engineer',
    bullets: [
      'Design and maintain comprehensive test plans, test cases, and test scripts for web, mobile, and desktop applications',
      'Develop and execute automated test suites using Cypress, reducing regression cycle time by 40%',
      'Perform functional, regression, smoke, sanity, and acceptance testing across multiple environments',
      'Track and manage defects through JIRA, perform root cause analysis, and verify fixes through impact analysis',
      'Collaborate with developers, product managers, and stakeholders in Agile/Scrum ceremonies to refine requirements and ensure quality throughout the SDLC',
      'Conduct API testing and validation using Postman to ensure backend reliability and data integrity',
      'Execute performance and load testing with JMeter to identify system bottlenecks and validate scalability',
      'Lead QA process improvement initiatives, including test case reviews, knowledge sharing sessions, and QA metric reporting',
    ],
  },
  {
    logo: '/logos/CareCloud.svg',
    company: 'CareCloud Inc — Islamabad, Pakistan',
    date: 'Dec 2024 – Apr 2026',
    title: 'Software Quality Assurance Engineer',
    bullets: [
      'Performed comprehensive manual testing including functional, regression, smoke, and sanity testing on EHR and practice management applications',
      'Conducted sprint-release impact analysis to assess risk and ensure stability before production deployments',
      'Tracked and managed defects through JIRA, performing detailed bug reporting, reproduction steps, and verification of fixes',
      'Executed performance and reliability assessments to validate system behavior under varying load conditions',
      'Validated API endpoints using Postman to ensure data consistency and backend reliability',
      'Collaborated with cross-functional teams in Agile environment, participating in sprint planning, daily standups, and retrospectives',
      'Created and maintained test documentation including test cases, checklists, and test summary reports',
    ],
    projects: {
      summary: 'Key Projects',
      details: [
        { title: 'CareCloud Charts', desc: 'Desktop EHR application used by doctors for managing patient records, medical histories, and clinical documentation. Responsible for full-cycle manual testing, regression testing across releases, and UI/UX validation to ensure compliance with healthcare standards.' },
        { title: 'CareCloud Central', desc: 'Comprehensive practice management suite including appointment scheduling, billing, patient records, and claims processing. Performed end-to-end testing of core workflows, cross-module integration testing, and post-release stability validation.' },
      ],
    },
  },
  {
    logo: '/logos/NextPak.png',
    company: 'NextPak Agile Solutions — Rawalpindi, Pakistan',
    date: 'Jul 2023 – Dec 2024',
    title: 'Associate Quality Assurance Engineer',
    bullets: [
      'Designed and executed test cases for web, mobile, and desktop applications covering functional, UI/UX, regression, boundary, and acceptance testing',
      'Performed API testing and validation using Postman, ensuring accurate data flow and error handling across backend services',
      'Conducted performance and load testing using JMeter, simulating 5,000–7,000 concurrent users to validate system stability and response times',
      'Performed cross-browser and responsive testing to ensure consistent user experience across Chrome, Firefox, Safari, and Edge',
      'Tracked bugs and managed testing workflows using Trello, communicated issues via Slack, and participated in Agile sprint cycles',
      'Created and maintained comprehensive test documentation including scope documents, test plans, test cases, and user manuals',
      'Owned full QA lifecycle for 7 projects simultaneously, from requirement analysis through test execution to post-release support',
      'Collaborated closely with developers and project managers to refine requirements, clarify acceptance criteria, and improve development processes',
    ],
    projects: {
      summary: 'Key Projects (7)',
      details: [
        { title: 'Greetrs', desc: 'Video messaging platform enabling personalized video greetings. Performed UI, cross-browser, and functional testing; executed load tests for 5,000 concurrent users to validate performance under peak traffic.' },
        { title: 'NextEats', desc: 'Web-based restaurant management system for order processing, menu management, and customer engagement. Conducted UI/UX validation and stress testing for 7,000 concurrent users.' },
        { title: 'Thessa B2B', desc: 'B2B e-commerce marketplace connecting suppliers and buyers. Validated admin panel and customer-facing features, performed Figma design verification and responsive testing across devices.' },
        { title: 'Tealpot', desc: 'Freelancing platform connecting clients with professionals. Took full QA ownership mid-development, creating test plans from scratch and managing all testing cycles.' },
        { title: 'Game Coin', desc: 'Sports membership and rewards application. Tested mobile and web interfaces, verified payment gateway integration, and validated user account management workflows.' },
        { title: 'FOS (Fabric Ordering System)', desc: 'Enterprise fabric ordering platform with order workflow management, access control, and inventory tracking. Performed admin/customer regression testing and data validation.' },
        { title: 'iControl', desc: 'IoT smart home and office automation platform. Tested real-time device control, sensor pairing, automation rules, and cross-platform synchronization across mobile and web interfaces.' },
      ],
    },
  },
]

function ProjectDetails({ projects }) {
  return (
    <details className="proj-list">
      <summary>{projects.summary}</summary>
      <div className="proj-details">
        {projects.details.map((p, i) => (
          <p key={i} style={i > 0 ? { marginTop: 8 } : undefined}>
            <strong>{p.title}</strong> &ndash; {p.desc}
          </p>
        ))}
      </div>
    </details>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">2+ years in Quality Assurance</p>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="company-row">
                <img src={job.logo} alt={job.company} style={{ width: 'auto', height: 40 }} />
                <div>
                  <p className="company">{job.company}</p>
                  <span className="date">{job.date}</span>
                </div>
              </div>
              <h3>{job.title}</h3>
              <ul>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {job.projects && <ProjectDetails projects={job.projects} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
