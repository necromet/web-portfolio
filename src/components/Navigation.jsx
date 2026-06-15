import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MediaNavigator from './MediaNavigation';
import './Navigation.css';

/**
 * Navigation Component
 * Responsive navigation bar with active state indication
 * Mobile-friendly hamburger menu
 */
function Navigation() {
  const location = useLocation();

  const isActiveSection = (hash) => {
    if (location.pathname !== '/') return false;
    if (hash === '#intro') return location.hash === '' || location.hash === '#intro';
    return location.hash === hash;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Edward R
        </Link>
        
        <div className="nav-right">
          <ul className="nav-menu">
            <li>
              <Link 
                to="/#intro" 
                className={isActiveSection('#intro') ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/#about" 
                className={isActiveSection('#about') ? 'nav-link active' : 'nav-link'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/#experience" 
                className={isActiveSection('#experience') ? 'nav-link active' : 'nav-link'}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/#projects" 
                className={isActiveSection('#projects') ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <MediaNavigator />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navigation;
