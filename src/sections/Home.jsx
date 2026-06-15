import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ExperienceSection from '../components/ExperienceSection.jsx';
import About from './About.jsx';
import './Home.css';
import Projects from './Projects.jsx';
import HeroImage from './HeroImage.jsx';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
