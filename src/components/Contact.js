import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-moi</h2>
      <p>Vous pouvez me contacter par email ou via les réseaux sociaux ci-dessous :</p>
      
      <ul className="contact-details">
        <li>Email : <a href="mailto:laura-bell@hotmail.fr">laura-bell@hotmail.fr</a></li>
        {/* <li>LinkedIn : <a href="https://linkedin.com/in/laura" target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></li> */}
        <li>GitHub : <a href="https://github.com/LauraT7" target="_blank" rel="noopener noreferrer">Mon GitHub</a></li>
      </ul>
    </div>
  );
}

export default Contact;
