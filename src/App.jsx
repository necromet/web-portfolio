import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

/**
 * Main App Component
 * Handles routing and overall layout structure
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Your Name. All rights reserved.</p>
            <p className="footer-tagline">Built with React + Vite</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
