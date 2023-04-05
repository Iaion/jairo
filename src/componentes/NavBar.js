import React from 'react';

import "../Estilos/Navegacion.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://live.staticflickr.com/65535/52780386119_d575221834_w.jpg"
            width="120"
            alt="Logo de la pagina web"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler" />
        <Navbar.Collapse id="navbar-toggler">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link href="#sobre-nosotros" >
              <Link to="/SobreNosotros">
              Sobre nosotros
              </Link>
            </Nav.Link>
            <Nav.Link href="#" data-scroll="#Los-trabajos-que-realizamos">
             <Link to="/Trabajos">
              Los trabajos que realizamos
              </Link>
            </Nav.Link>
            <Nav.Link href="#Testimonios" data-scroll="#">
              <Link to="/Testimonios">
              Testimonios
              </Link>
            </Nav.Link>
            <Nav.Link href="#" data-scroll="#contacto">
              <Link to="/Contactos">                
              Contactos
              </Link>
            </Nav.Link>
          </Nav>
          <a
            className="navbar-brand ml-auto"
            target="_blank"
            href="https://wa.me/54223156908009"
          >
            <img
              src="https://live.staticflickr.com/65535/52780552570_963e85c1b4_z.jpg"
              width="50"
              alt="Logo de wasap"
            />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;