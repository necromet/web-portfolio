import './ProjectTag.css';

/**
 * ProjectTag Component
 * A reusable tag component for displaying technology names in project cards
 */
function ProjectTag({ children, className = '' }) {
  return (
    <span className={`project-tag ${className}`.trim()}>
      {children}
    </span>
  );
}

export default ProjectTag;
