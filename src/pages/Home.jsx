import { useState } from 'react';
import { Link } from 'react-router-dom';
import TechTag from '../components/TechTag';
import './Home.css';

/**
 * Home/Landing Page Component
 * Hero section with professional introduction and call-to-action
 */
function Home() {
  const [activeCompany, setActiveCompany] = useState('Sinarmas Multiartha');

  const experiences = {
    'Sinarmas Multiartha': {
      role: 'Data Scientist',
      company: 'Sinarmas Multiartha',
      date: 'JAN 2023 - PRESENT',
      points: [
        'Help companies within Sinarmas group that offer loan services by creating dashboards and reports',
        'Build data pipelines and analytics solutions to drive business decisions'
      ]
    },
    'Company B': {
      role: 'Previous Role',
      company: 'Company B',
      date: '2021 - 2022',
      points: ['Add your previous experience here']
    }
  };

  const currentExp = experiences[activeCompany];

  return (
    <div className="home">
      <section id="intro" className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <img src="./src/assets/Hero Image ER.png" alt="AI Technology" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title-with-cursor" align="left">
              hi, <span className="highlight">edward</span> here.
            </h1>
            <p className="hero-description" align="left">
              I'm a data scientist and mathematician based in Indonesia. I'm fascinated by <span className="hero-description-bold">artificial intelligence</span> and its potential.
            </p>
            <div style={{ textAlign: 'left' }}>
              <Link to="/contact" className="btn btn-secondary">
                  Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="about">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title" align="left">
              <span className="highlight">#</span> about me
            </h1>
            <p className="hero-description" align="left">
              I am currently a <span className="hero-description-bold">Data Scientist</span> at <span className="highlight" style={{ fontWeight: 500 }}>Sinarmas Multiartha</span>, where I help companies within Sinarmas group that offer loan services by creating dashboards and reports. Outside of work, I enjoy exploring new technologies and enhancing my skills in Artificial Intelligence, specifically in <span className="hero-description-bold">Generative AI</span> and <span className="hero-description-bold">AI Agents</span>.
            </p>
            <p className="hero-description-wo-margin" align="left">
              Here are some technologies and tools that I've been working with recently:
            </p>
            <TechTag className="tech-tag">Python</TechTag>
            <TechTag className="tech-tag">PostgreSQL</TechTag>
            <TechTag className="tech-tag">React.js</TechTag>
            <TechTag className="tech-tag">Tableau</TechTag>
            <TechTag className="tech-tag">Superset</TechTag>
            <TechTag className="tech-tag">Langflow</TechTag>
            <div style={{ textAlign: 'left'}}>
            </div>
          </div>
          <div className="hero-image">
            <img src="./src/assets/Hero Image ER.png" alt="AI Technology" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="experience-wrapper">
          <h1 className="hero-title" align="left">
            <span className="highlight">#</span> experience
          </h1>

          <div className="experience-container">
            {/* LEFT - Company List */}
            <ul className="company-list">
              {Object.keys(experiences).map((company) => (
                <li
                  key={company}
                  className={activeCompany === company ? 'active' : ''}
                  onClick={() => setActiveCompany(company)}
                >
                  {company.toUpperCase()}
                </li>
              ))}
            </ul>

            {/* RIGHT - Experience Details */}
            <div className="experience-content">
              <h3 className="exp-role">
                {currentExp.role} <span className="exp-company">@ {currentExp.company}</span>
              </h3>
              <p className="exp-date">{currentExp.date}</p>

              <ul className="exp-points">
                {currentExp.points.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">30+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="skills-preview">
        <h2 className="section-title">Core Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-icon">⚛️</span>
            <h3>Frontend Development</h3>
            <p>React, Vue, TypeScript, Modern CSS</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🔧</span>
            <h3>Backend Development</h3>
            <p>Node.js, Python, REST APIs, Databases</p>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🎨</span>
            <h3>UI/UX Design</h3>
            <p>Figma, Responsive Design, Accessibility</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
