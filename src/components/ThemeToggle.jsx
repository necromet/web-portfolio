import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <span className={`slider ${theme === 'dark' ? 'dark' : 'light'}`}>
        <span className={`slider-circle ${theme === 'dark' ? 'slider-circle-dark' : ''}`}></span>
      </span>
    </button>
  );
}

export default ThemeToggle;
