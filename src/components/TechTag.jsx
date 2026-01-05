import './TechTag.css';
import pythonIcon from '../assets/python.svg';

/**
 * TechTag Component
 * A reusable tag component for displaying technology/skill names
 */
function TechTag({ children, className = '' }) {
  return (
    <span className={`tech-tag ${className}`.trim()}>
      {children}
    </span>
  );
}

export default TechTag;
