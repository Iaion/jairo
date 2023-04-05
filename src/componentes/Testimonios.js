import React from 'react';
import "../Estilos/Testimonios.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';

function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <h2 className="seccion-titulo-tt">Testimonios</h2>
      <h3 className="seccion-descripcion">Estos son algunos testimonios de nuestros clientes...</h3>      
      <div id="testimonios-carrusel" className="carousel carousel-dark slide " data-bs-ride="carousel">      
        <Carousel >        
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781644405_1cd8ef294d_z.jpg"
                alt="First slide"
              />
              <div className="testimonio-contenido">
              <p class="testimonio-texto">TRABAJAN MUY BIEN YO CADA VEZ QUE ME MUDO LOS CONTRATOS Y LOS SANITARIOS QUEDAN EXPECTACULAR</p>          
                <p class="cliente">Patricia</p>
                <p class="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>            
          </Carousel.Item>          
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781481404_6190080ec4_m.jpg"
                alt="Second slide"
              />
              <div className="testimonio-contenido">
                <p class="testimonio-texto">Hacen exelente trabajos!! Esmaltaron mi bañera y pulieron mis sanitarios y se quedaron como nuevo!!</p>          
                <p class="cliente">Linda</p>
                <p class="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781481689_62c350dbc7_m.jpg"
                alt="Third slide"
              />
              <div className="testimonio-contenido">
                <p className="testimonio-texto">En pocas horas mi bañera quedo como nueva. Son muy prolijos para trabajar. Muchas Gracias !!</p>          
                <p className="cliente">Mari</p>
                <p className="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781645425_250dd04f2f_m.jpg"
                alt="First slide"
              />
              <div className="testimonio-contenido">
              <p class="testimonio-texto">Excelente trabajo . La bañera quedo como nueva . Realizaron un trabajo muy prolijo. Muchas gracias</p>          
                <p class="cliente">Mari</p>
                <p class="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>            
          </Carousel.Item>          
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781482444_eae19bb308_m.jpg"
                alt="Second slide"
              />
              <div className="testimonio-contenido">
                <p class="testimonio-texto">El baño que me restauraron fue muy elogiado, gracias nuevamente por el trabajo realizado. Muy recomendable su servicio.</p>          
                <p class="cliente">Nano</p>
                <p class="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="testimonio-imagen">
              <img
                className="d-block w-100 rounded-circle"
                src="https://live.staticflickr.com/65535/52781701958_c4f6a7ee2d_m.jpg"
                alt="Third slide"
              />
              <div className="testimonio-contenido">
                <p class="testimonio-texto">Mil gracias!! Excelente trabajo y me hicieron un lugar super rápido!! 🙌 Mega recomendable</p>          
                <p class="cliente">Nata</p>
                <p class="cargo">Comentario obtenido de Facebbok</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonios;



