import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MediaNavigator from './MediaNavigation';
import './MobileDrawer.css';

function MobileDrawer({ isOpen, onClose, activeSection }) {
  const location = useLocation();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const isActive = (hash) => {
    if (location.pathname !== '/') return false;
    return activeSection === hash.slice(1);
  };

  const handleLinkClick = () => {
    onClose();
  };

  const navItems = [
    { to: '/#intro', hash: '#intro', label: 'Home' },
    { to: '/#about', hash: '#about', label: 'About' },
    { to: '/#experience', hash: '#experience', label: 'Experience' },
    { to: '/#projects', hash: '#projects', label: 'Projects' },
    { to: '/contact', hash: null, label: 'Contact' },
    { to: '/resume', hash: null, label: 'Resume' },
  ];

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={drawerRef}
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-header">
          <Link to="/" className="drawer-logo" onClick={handleLinkClick}>
            Edward R
          </Link>
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="drawer-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`drawer-link ${item.hash && isActive(item.hash) ? 'active' : ''} ${!item.hash && location.pathname === item.to ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              <span className="drawer-link-indicator" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="drawer-footer">
          <div className="drawer-social">
            <MediaNavigator />
          </div>
          <div className="drawer-theme">
            <span className="drawer-theme-label">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}

export default MobileDrawer;
