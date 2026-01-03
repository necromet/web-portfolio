import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home/Landing Page Component
 * Hero section with professional introduction and call-to-action
 */
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            I build exceptional digital experiences that combine clean code 
            with thoughtful design. Specialized in modern web technologies 
            and user-centered solutions.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">5+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
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
