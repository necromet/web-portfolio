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

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Edward R
        </Link>
        
        <div className="nav-right">
          <ul className="nav-menu">
            <li>
              <a 
                href="/#intro" 
                className={location.hash === '#intro' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/#about" 
                className={location.hash === '#about' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/#experience" 
                className={location.hash === '#experience' ? 'nav-link active' : 'nav-link'}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/#projects" 
                className={location.hash === '#projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
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
