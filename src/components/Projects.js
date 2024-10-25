import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      
      <div className="projects-grid">
        <div className="project">
          <h3>Projet Oh my food</h3>
          <img src="/images/OMF.webp" alt="Projet Oh My Food" className="project-image" />
          <p>Le projet Oh My Food a été réalisé dans le cadre de ma formation. Il utilise <strong>HTML</strong>, <strong>CSS</strong> et <strong>SASS</strong> pour créer un site de présentation de restaurants avec des menus interactifs. L'objectif principal était de développer des <strong>animations CSS</strong> pour améliorer l'expérience utilisateur. Ce projet a été conçu avec une approche <strong>mobile-first</strong>, ce qui garantit une navigation fluide sur tous types d'appareils, en mettant l'accent sur la performance et l'accessibilité.</p>
          <a href="https://github.com/LauraT7/OhMyFood" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>

        <div className="project">
          <h3>Projet Portfolio Sophie</h3>
          <img src="/images/SophieBluelPortfolio.webp" alt="Projet Portfolio Sophie" className="project-image" />
          <p>Ce projet, réalisé avec <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong>, consiste à rendre dynamique le portfolio d'une architecte d'intérieur. Il intègre des fonctionnalités comme la récupération des projets via une <strong>API</strong>, un tri par catégorie, et une interface pour gérer les projets (ajout/suppression).</p>
          <a href="https://github.com/LauraT7/OC-P6" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>

        <div className="project">
          <h3>Projet Argent Bank</h3>
          <img src="/images/ArgentBank.webp" alt="Projet Argent Bank" className="project-image" />
          <p>Ce projet consiste à développer le backend de l'application bancaire <strong>Argent Bank</strong>. Il utilise <strong>Node.js</strong> et <strong>MongoDB</strong> pour la gestion des utilisateurs et des transactions. Le projet comprend l'implémentation d'une <strong>API</strong> permettant de récupérer les données des utilisateurs, ainsi que la gestion des opérations de connexion et de modification des informations utilisateurs. Un script permet de peupler la base de données avec des utilisateurs fictifs, comme <strong>Tony Stark</strong> et <strong>Steve Rogers</strong>. L'API est documentée et accessible via <strong>Swagger</strong>.</p>
          <a href="https://github.com/LauraT7/ArgentBank" target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
