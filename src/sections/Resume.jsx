import { useRef, useState } from 'react';
import './Resume.css';

const resumeData = {
  name: 'Edward Renaldi',
  title: 'Data Scientist',
  contact: {
    email: 'edwardrenaldi219@gmail.com',
    businessEmail: 'eraicode@gmail.com',
    location: 'Indonesia',
    github: 'github.com/necromet',
    linkedin: 'linkedin.com/in/edward-renaldi',
  },
  summary:
    'Data Scientist with experience in end-to-end machine learning projects, business intelligence, and AI workflow automation. Skilled in building predictive models, interactive dashboards, and deploying AI solutions across compliance, customer service, and HR domains. Passionate about Generative AI and AI Agents.',
  skills: {
    'Programming & Data': ['Python', 'PostgreSQL'],
    'ML & AI': ['XGBoost', 'Linear Regression', 'LangChain', 'LangGraph', 'PaddleOCR', 'N8N'],
    'Visualization & BI': ['Tableau', 'Superset'],
    'Tools & Frameworks': ['React.js', 'Langflow', 'Excel', 'SPSS'],
  },
  experience: [
    {
      role: 'Data Scientist',
      company: 'Sinarmas Multiartha',
      date: 'JUL 2022 — PRESENT',
      points: [
        'Provided business insights and customer risk scoring models for cash loan and motorcycle credit applications, running end-to-end from ETL and EDA to developing ML models (XGBoost, Linear Regression).',
        'Delivered AI workflows across compliance, customer services, and human resource processes.',
        'Built interactive dashboards for stakeholders using Tableau and Superset.',
        'Managed ETL processes using Python and SQL to ensure data accuracy and reliability.',
      ],
    },
    {
      role: 'Assistant Lecturer',
      company: 'Universitas Pelita Harapan',
      date: 'AUG 2018 — JUL 2021',
      points: [
        'Taught Statistics, Calculus, Linear Algebra, Advanced Financial Mathematics, and Computer Applications (Excel, SPSS).',
        'Conducted tutorial sessions, graded assignments, and provided academic support.',
        'Guided students in problem-solving and conceptual understanding.',
      ],
    },
  ],
  freelance: [
    {
      role: 'Simulation Engineer',
      company: 'Freelance',
      date: '2026',
      points: [
        'Developed traffic light optimization algorithms using OSMnx road network data across Connecticut and New Jersey.',
        'Built road traffic simulation on peak-hour conditions with traffic density derived from road geometry.',
        'Reduced 48 road metrics into a single optimization output to minimize congestion.',
      ],
    },
    {
      role: 'Creator & Developer',
      company: '100sheep.net',
      date: '2026',
      points: [
        'Created a church care management platform with QR attendance, member statistics, role-based access, and CSV import.',
        'Built a full-stack web application from concept to deployment.',
      ],
    },
    {
      role: 'AI Mathematics Trainer',
      company: 'Outlier',
      date: 'JUL 2024 — SEP 2024',
      points: [
        'Assessed factuality and relevance of AI-generated mathematics text.',
        'Crafted questions and answers related to mathematics without AI assistance.',
        'Evaluated and ranked AI-generated mathematics responses.',
      ],
    },
    {
      role: 'Mathematics Tutor',
      company: 'Freelance',
      date: 'JAN 2024 — DEC 2024',
      points: [
        'Provided one-on-one tutoring in financial mathematics and business statistics.',
        'Designed personalized learning plans to improve student performance.',
      ],
    },
  ],
  voluntary: [
    {
      role: 'Head of Youth Ministry Organization',
      company: 'Youth Ministry at GKY BSD',
      date: '',
      points: [
        'Led monthly meetings for 20 youths and organized activities for ~100 church members.',
        'Planned community service projects, educational workshops, and youth retreat events.',
        'Mentored 7-10 people on personal development and academic challenges.',
      ],
    },
  ],
};

function Resume() {
  const documentRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!documentRef.current || downloading) return;
    setDownloading(true);

    try {
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin: 0,
        filename: 'Edward_Renaldi_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(documentRef.current).save();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <button className="resume-download-btn" onClick={handleDownload} disabled={downloading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {downloading ? 'Generating...' : 'Download PDF'}
        </button>
      </div>
      <div className="resume-document" ref={documentRef}>
        <header className="resume-header">
          <div className="resume-header-main">
            <h1 className="resume-name">{resumeData.name}</h1>
            <p className="resume-title">{resumeData.title}</p>
          </div>
          <div className="resume-contact">
            <span>{resumeData.contact.email}</span>
            <span className="resume-sep">|</span>
            <span>{resumeData.contact.location}</span>
            <span className="resume-sep">|</span>
            <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">
              {resumeData.contact.github}
            </a>
            <span className="resume-sep">|</span>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              {resumeData.contact.linkedin}
            </a>
          </div>
        </header>

        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <div className="resume-divider" />
          <p className="resume-summary">{resumeData.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Technical Skills</h2>
          <div className="resume-divider" />
          <div className="resume-skills-grid">
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div key={category} className="resume-skill-row">
                <span className="resume-skill-category">{category}:</span>
                <span className="resume-skill-items">{items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="resume-section-title">Professional Experience</h2>
          <div className="resume-divider" />
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="resume-exp-item">
              <div className="resume-exp-header">
                <div className="resume-exp-left">
                  <h3 className="resume-exp-role">{exp.role}</h3>
                  <span className="resume-exp-company">{exp.company}</span>
                </div>
                <span className="resume-exp-date">{exp.date}</span>
              </div>
              <ul className="resume-exp-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section resume-page-break">
          <h2 className="resume-section-title">Freelance & Contract</h2>
          <div className="resume-divider" />
          {resumeData.freelance.map((exp, i) => (
            <div key={i} className="resume-exp-item">
              <div className="resume-exp-header">
                <div className="resume-exp-left">
                  <h3 className="resume-exp-role">{exp.role}</h3>
                  <span className="resume-exp-company">{exp.company}</span>
                </div>
                <span className="resume-exp-date">{exp.date}</span>
              </div>
              <ul className="resume-exp-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section resume-section-last">
          <h2 className="resume-section-title">Voluntary</h2>
          <div className="resume-divider" />
          {resumeData.voluntary.map((exp, i) => (
            <div key={i} className="resume-exp-item">
              <div className="resume-exp-header">
                <div className="resume-exp-left">
                  <h3 className="resume-exp-role">{exp.role}</h3>
                  <span className="resume-exp-company">{exp.company}</span>
                </div>
                {exp.date && <span className="resume-exp-date">{exp.date}</span>}
              </div>
              <ul className="resume-exp-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Resume;
