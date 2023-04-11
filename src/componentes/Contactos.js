import React from 'react';
import { Button } from 'react-bootstrap';
import "../Estilos/Contactos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsWhatsapp, BsMessenger, BsEnvelopeCheckFill, BsFacebook } from 'react-icons/bs';

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <div className="container text-center d-flex justify-content-evenly rectangulo">
          <div className="row">
            <div className="col-12 col-md-4 ">
              <a target="_blank" href="https://wa.me/54223156908009">
                <Button type="button">
                  Whatsapp 
                  <BsWhatsapp />
                </Button>
              </a>
              <a target="_blank" href="https://m.me/esmaltados.molina">
                <Button type="button">
                  Messenger  
                  <BsMessenger />
                </Button>
              </a>
            </div>
            <div className="col-12 col-md-4 descripcion">
              Contactenos para presupuestos o turnos.
            </div>
            <div className="col-12 col-md-4">
              <a target="_blank" href="mailto:esmaltadosaries@gmail.com">
                <Button type="button">
                  Correo 
                  <BsEnvelopeCheckFill />
                </Button>
              </a>
              <a target="_blank" href="https://www.facebook.com/esmaltados.molina">
                <Button type="button">
                  Facebook
                  <BsFacebook />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
