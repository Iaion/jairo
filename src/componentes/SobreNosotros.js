import React from 'react';
import  "../Estilos/Sobre.css"
import logo from '../imagenes/logo2.png';

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="contenedor">
        <img src={logo} alt="Descripción de la imagen" />
        <h2 className="seccion-subtitulo">Emaltado de bañeras</h2>
        <p className="seccion-texto">Nos dedicamos exclusivamente a la restauración de bañeras y la recuperación del brillo original de su baño. Con mas de 17 años de experiencia somos los numero uno de Mar del plata y la zona costera.</p>
      </div>
    </section>
  );
}

export default SobreNosotros;