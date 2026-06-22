import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MediaNavigator from './MediaNavigation';
import MobileDrawer from './MobileDrawer';
import './Navigation.css';

const sectionIds = ['intro', 'about', 'experience', 'projects'];

function Navigation() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('intro');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observers = [];
    const visibilityMap = new Map();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibilityMap.set(id, entry.intersectionRatio);

          let bestId = 'intro';
          let bestRatio = 0;
          visibilityMap.forEach((ratio, secId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = secId;
            }
          });
          if (bestRatio > 0) {
            setActiveSection(bestId);
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const isActiveSection = (hash) => {
    if (location.pathname !== '/') return false;
    return activeSection === hash.slice(1);
  };

  return (
    <>
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
                  onClick={() => { if (location.pathname === '/contact') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume" 
                  className={location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <MediaNavigator />
          <ThemeToggle />
          <button
            className="hamburger-btn"
            onClick={openDrawer}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        activeSection={activeSection}
      />
    </>
  );
}

export default Navigation;
