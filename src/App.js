import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>

            {location.pathname !== '/projects' && (
              <>
                <li><a href="#about">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
              </>
            )}

            {location.pathname !== '/projects' && (
              <li><Link to="/projects">Projets</Link></li>
            )}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router basename="/Portfolio">
      <App />
    </Router>
  );
}
