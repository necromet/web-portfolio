import { Link } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection';
import About from './About';
import './Home.css';
import Projects from './Projects';
import HeroImage from './heroimage.jsx';

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
            <HeroImage />
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
      <Projects />
    </div>
  );
}

export default Home;
