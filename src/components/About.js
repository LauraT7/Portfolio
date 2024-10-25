import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'; 
function About() {
  return (
    <div className="about-container">
      <h2>À propos de moi</h2>
      <p>
        Bonjour ! Je m'appelle <strong>Laura</strong> et je suis une <strong>développeuse web</strong> en formation.
        Passionnée par la création de projets interactifs et innovants, je me spécialise dans la construction
        d'applications web front-end en utilisant des technologies comme <strong>React</strong>, <strong>HTML</strong>, 
        <strong>CSS</strong>, et <strong>JavaScript</strong>.
      </p>
      <p>
        Pendant ma formation, j'ai travaillé sur divers projets que vous pouvez découvrir 
        dans la section <Link to="/projects"><strong>Projets</strong></Link> de ce portfolio. Je suis toujours à la recherche 
        de nouvelles opportunités pour améliorer mes compétences et apporter des solutions créatives à des 
        problèmes réels.
      </p>
    </div>
  );
}

export default About;
