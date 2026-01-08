import './Projects.css';
import TechTag from '../components/TechTag';

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
    image: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=E-Commerce',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop interface, team sharing, and progress tracking.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/6c5ce7/ffffff?text=Task+Manager',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    image: 'https://via.placeholder.com/600x400/00b894/ffffff?text=Weather+App',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and automated reporting features.',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    image: 'https://via.placeholder.com/600x400/fd79a8/ffffff?text=Analytics',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Mobile-friendly fitness tracking app with workout logging, progress charts, and goal setting.',
    technologies: ['React Native', 'Redux', 'Express'],
    image: 'https://via.placeholder.com/600x400/fdcb6e/ffffff?text=Fitness+App',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals with template customization and SEO optimization.',
    technologies: ['Next.js', 'Prisma', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400/e17055/ffffff?text=Portfolio+CMS',
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
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
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
