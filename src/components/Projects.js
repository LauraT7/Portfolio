import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="project">
        <h3>Projet 1</h3>
        <p>Description du projet 1.</p>
        <a href="URL_DU_PROJET" target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>

      <div className="project">
        <h3>Projet 2</h3>
        <p>Description du projet 2.</p>
        <a href="URL_DU_PROJET" target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>

      <div className="project">
        <h3>Projet 3</h3>
        <p>Description du projet 3.</p>
        <a href="URL_DU_PROJET" target="_blank" rel="noopener noreferrer">Voir le projet</a>
      </div>
    </div>
  );
}

export default Projects;
