import './Projects.css';
import ProjectTag from '../components/ProjectTag';

/**
 * Projects Page Component
 * Showcases portfolio projects with descriptions and links
 */

// Placeholder project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    logo: '🛒',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface, team sharing, and progress tracking.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    logo: '✓',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    logo: '☀',
    demoLink: '#',
    githubLink: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="project-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">#</span> projects
          </h1>
        </div>
        <div className="projects-grid">  
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-logo">
                  <span className="logo-icon">{project.logo}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <ProjectTag key={index}>{tech}</ProjectTag>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.demoLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} demo`}
                  >
                    <span>Live Demo</span>
                    <span className="link-icon">→</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <span>GitHub</span>
                    <span className="link-icon">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
