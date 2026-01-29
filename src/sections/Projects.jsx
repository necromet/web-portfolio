import './Projects.css';
import ProjectTag from '../components/ProjectTag';
import match_word from '../assets/match_word.svg';
import receipt_parser from '../assets/receipt_long.svg';
import analytics from '../assets/analytics.svg';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'AI Document Translator',
    description: 'A Document translator powered by AI that translates documents while preserving format and layout.',
    technologies: ['Python'],
    logo: <img src={match_word} alt="AI Document Translator" />,
    demoLink: '/ai-doc-translator',
    githubLink: 'https://github.com/necromet/ai-document-translator',
  },
  {
    id: 2,
    title: 'Receipt Parser',
    description: 'Parses receipts to extract key information such as vendor, date, total amount, and itemized purchases using PaddleOCR and LLM.',
    technologies: ['Python'],
    logo: <img src={receipt_parser} alt="Receipt Parser" />,
    demoLink: '/receipt-parser',
    githubLink: 'https://github.com/necromet/ai-receipt-agent',
  },
  {
    id: 3,
    title: 'AI Data Analyzer',
    description: 'An AI-powered data analysis tool that generates insights and visualizations from datasets using natural language queries.',
    technologies: ['Python', 'LangGraph', 'LangChain'],
    logo: <img src={analytics} alt="AI Data Analyzer" />,
    demoLink: '/ai-data-analyzer',
    githubLink: 'https://github.com/necromet/ai-data-analyzer',
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
                  {project.demoLink.startsWith('http') ? (
                    <a 
                      href={project.demoLink} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} demo`}
                    >
                      <span>Details</span>
                      <span className="link-icon">→</span>
                    </a>
                  ) : (
                    <Link 
                      to={project.demoLink} 
                      className="project-link"
                      aria-label={`View ${project.title} demo`}
                    >
                      <span>Details</span>
                      <span className="link-icon">→</span>
                    </Link>
                  )}
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
