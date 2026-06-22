import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MobileBottomNav.css';

const sectionIds = ['intro', 'about', 'experience', 'projects'];

const navItems = [
  {
    to: '/#intro',
    label: 'Home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    section: 'intro',
  },
  {
    to: '/#about',
    label: 'About',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    section: 'about',
  },
  {
    to: '/#experience',
    label: 'Work',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    section: 'experience',
  },
  {
    to: '/#projects',
    label: 'Projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    section: 'projects',
  },
  {
    to: '/contact',
    label: 'Contact',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    section: null,
  },
];

function MobileBottomNav() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('intro');
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
          if (bestRatio > 0) setActiveSection(bestId);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < 100) {
            setVisible(true);
          } else if (currentScrollY > lastScrollY + 10) {
            setVisible(false);
          } else if (currentScrollY < lastScrollY - 10) {
            setVisible(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (item) => {
    if (item.section === null) {
      return location.pathname === '/contact';
    }
    return location.pathname === '/' && activeSection === item.section;
  };

  return (
    <nav className={`mobile-bottom-nav ${visible ? 'visible' : 'hidden'}`} aria-label="Mobile navigation">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          className={`bottom-nav-item ${isActive(item) ? 'active' : ''}`}
          aria-label={item.label}
        >
          {item.icon}
          <span className="bottom-nav-label">{item.label}</span>
          {isActive(item) && <span className="bottom-nav-dot" />}
        </Link>
      ))}
    </nav>
  );
}

export default MobileBottomNav;
