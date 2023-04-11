import GaleriaModal from './GaleriaModal';
import 'bootstrap/dist/css/bootstrap.css';
import "../Estilos/Trabajos.css"; 
import { Row, Col } from 'react-bootstrap';

const bañeras = [
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-01.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-02.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-03.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-04.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-05.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-06.png",
    "https://iaion.github.io/Aries/imagenes/Ba%C3%B1eras%20800x600/es-b-07.png"

  ];
  const azulejos = [
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-01.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-02.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-03.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-04.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-05.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-06.png",
    "https://iaion.github.io/Aries/imagenes/P.%20azulejos%20800x600/a-07.png"

  ];
  const sanitarios = [
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-1.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-2.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-3.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-4.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-5.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20sanitarios/p-d-s-6.jpg"

  ];
  const bachas = [
    "https://iaion.github.io/Aries/imagenes/P.%20bachas/p-d-p-1.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20bachas/p-d-p-2.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20bachas/p-d-p-3.jpg",
    
  ];
  const inoxi = [
    "https://iaion.github.io/Aries/imagenes/P.%20inoxi/b-i-1.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20inoxi/b-i-1.jpg",
    "https://iaion.github.io/Aries/imagenes/P.%20inoxi/b-i-1.jpg"

  ];
  const corte = [
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-1.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-2.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-3.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-4.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-5.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-6.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-7.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-8.jpg",
    "https://iaion.github.io/Aries/imagenes/C.%20ba%C3%B1eras/c-d-b-9.jpg"

  ];

function Trabajos() {
   return (
    <div className="margin-top">
      <h2 className="t">Estos son los trabajos en los que nos especializamos:</h2>
      <Row>
        <Col><div className="elem">
          <h2 className="ti">Esmaltado de bañeras</h2>
          <GaleriaModal fotos={bañeras} /></div>
        </Col>
        <Col><div className="elem">
          <h2 className="ti">Pulio de azulejos</h2>
          <GaleriaModal  fotos={azulejos}  /></div>
        </Col>
        <Col><div className="elem">
          <h2 className="ti">Pulido de sanitarios</h2>
          <GaleriaModal  fotos={sanitarios}  /></div>
        </Col>
      </Row>
      <Row>
        <Col><div className="elem">
          <h2 className="ti">Pulidos de bachas</h2>
          <GaleriaModal  fotos={bachas} /></div>
        </Col>
        <Col><div>
          <h2 className="ti">Pulidos inoxidable</h2>
          <GaleriaModal  fotos={inoxi} /></div>
        </Col>        
        <Col><div className="elem">
          <h2 className="ti">Corte de bañeras</h2>
          <GaleriaModal  fotos={corte} /></div>
        </Col>
      </Row>
    </div>
  );}
  export default Trabajos