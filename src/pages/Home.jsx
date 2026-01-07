import { Link } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection';
import About from './About';
import './Home.css';

/**
 * Home/Landing Page Component
 * Hero section with professional introduction and call-to-action
 */
function Home() {
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
      <About />
      {/* Experience Section */}
      <ExperienceSection />

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
