import React from 'react';
import "../Estilos/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <p className="footer-texto text-center">Gracias por visitarnos.<br/>Ten un buen día.</p>
      <div className="derechos-de-autor">Creado por Leandro Calzoni (2023) &#169;</div>
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://github.com/Iaion" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/leandro-calzoni-520093243/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="mailto:leandricalzoni@gmail.com" target="_blank" rel="noopener noreferrer">
          <BsEnvelope />
        </a>
      </div> 
    </footer>
  );
}

export default Footer;
