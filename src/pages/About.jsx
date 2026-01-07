import './About.css';
import TechTag from '../components/TechTag';

/**
 * About Page Component
 * Personal bio, skills, and professional experience
 */
function About() {
  return (
    <section id="about" className="about">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">#</span> about me
          </h1>
          <p className="hero-description">
            I am currently a <span className="hero-description-bold">Data Scientist</span> at <span className="highlight" style={{ fontWeight: 500 }}>Sinarmas Multiartha</span>, where I help companies within Sinarmas group that offer loan services by creating dashboards and reports. Outside of work, I enjoy exploring new technologies and enhancing my skills in Artificial Intelligence, specifically in <span className="hero-description-bold">Generative AI</span> and <span className="hero-description-bold">AI Agents</span>.
          </p>
          <p className="hero-description-wo-margin">
            Here are some technologies and tools that I've been working with recently:
          </p>
          <div className="tech-tags-container">
            <TechTag>Python</TechTag>
            <TechTag>PostgreSQL</TechTag>
            <TechTag>React.js</TechTag>
          </div>
          <div className="tech-tags-container">
            <TechTag>Tableau</TechTag>
            <TechTag>Superset</TechTag>
            <TechTag>Langflow</TechTag>
          </div>
        </div>
        <div className="hero-image">
          <img src="./src/assets/Hero Image ER.png" alt="AI Technology" />
        </div>
      </div>
    </section>
  );
}

export default About;
