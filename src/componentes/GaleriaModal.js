import React from 'react';
import ReactDOM from 'react-dom';
import "../Estilos/Galeria.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import { Modal, Carousel } from 'react-bootstrap';

function GaleriaModal(props) {
    const fotos = props.fotos;
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const carouselItems = fotos.map((foto, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={foto}
            alt={`Imagen ${index + 1}`}
          />
        </Carousel.Item>
      ));
      
      return (
        <>
         <div className="contenedor-imagen">
        <img src={fotos[0]} alt="Imagen de muestra" height="300px" width="auto" />
         <button className="boton-imagen" type="button" onClick={handleShow}>
        Ver galería
      </button>
        </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Carousel>{carouselItems}</Carousel>
            </Modal.Body>
          </Modal>
        </>
      );
      

  }
  
  export default GaleriaModal;
