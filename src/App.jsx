import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Home from './sections/Home';
import Contact from './sections/Contact';
import './App.css';

function AppContent() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Edward Renaldi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/web-portfolio">
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
