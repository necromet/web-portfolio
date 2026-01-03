import './About.css';

/**
 * About Page Component
 * Personal bio, skills, and professional experience
 */

function About() {
  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Redux'],
    backend: ['Node.js', 'Python', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'Webpack', 'Jest', 'Figma', 'VS Code'],
  };

  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      period: '2021 - Present',
      description: 'Lead development of customer-facing web applications, mentor junior developers, and architect scalable solutions.',
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Built responsive web applications for clients across various industries using modern JavaScript frameworks.',
    },
    {
      role: 'Junior Developer',
      company: 'Startup Co.',
      period: '2018 - 2019',
      description: 'Contributed to product development, implemented new features, and collaborated with design team.',
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Passionate developer crafting digital experiences
        </p>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="bio-container">
          <div className="bio-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">👨‍💻</span>
            </div>
          </div>
          <div className="bio-content">
            <h2 className="section-heading">Hello, I'm a Developer</h2>
            <p className="bio-text">
              With over 5 years of experience in web development, I specialize in 
              building scalable, performant, and user-friendly applications. My journey 
              started with a curiosity about how websites work, which evolved into a 
              passion for creating exceptional digital experiences.
            </p>
            <p className="bio-text">
              I believe in writing clean, maintainable code and staying current with 
              industry best practices. When I'm not coding, you can find me contributing 
              to open-source projects, writing technical articles, or exploring new 
              technologies.
            </p>
            <p className="bio-text">
              I'm always excited to collaborate on interesting projects and tackle 
              challenging problems. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Others</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-role">{job.role}</h3>
                <div className="job-meta">
                  <span className="job-company">{job.company}</span>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
