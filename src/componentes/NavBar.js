import React from 'react';

import "../Estilos/Navegacion.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logow from '../imagenes/logo-wasap.png';
import logo from '../imagenes/logo2.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand className="d-none d-lg-block">
        <Link to="/" >
          <img
            src={logo}
            width="125rem"
            alt="Logo de la pagina web"
          /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler" />
        <Navbar.Collapse id="navbar-toggler">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link  >
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Sobre nosotros
              </Link>
            </Nav.Link>
            <Nav.Link >
             <Link to="/Trabajos" style={{ color: 'white', textDecoration: 'none' }}>
              Los trabajos que realizamos
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/Testimonios" style={{ color: 'white', textDecoration: 'none' }}>
              Testimonios
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/Contactos" style={{ color: 'white', textDecoration: 'none' }}>                
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
              src={logow}
              width= "75rem"
              alt="Logo de wasap"
            />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;