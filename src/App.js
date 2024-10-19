import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
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
              <section id="home">
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Je suis Laura, développeuse web en formation.</p>
              </section>

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
    <Router>
      <App />
    </Router>
  );
}