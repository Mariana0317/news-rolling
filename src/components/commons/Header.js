import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
//import { Nav.Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCameraRetro,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="">
      <Jumbotron fluid>
        <Container>
          <h1 className="text-center my-5">Rolling News</h1>
          <p></p>
        </Container>
      </Jumbotron>

      <Navbar bg="light" expand="lg" className=" ">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-between">
            <Nav.Link className="ml-3">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
            <Nav.Link className="">Actualidad</Nav.Link>
            <Nav.Link className="">Espectaculos</Nav.Link>
            <Nav.Link className="">Tecnologia</Nav.Link>
            <Nav.Link className="">Deportes</Nav.Link>
            <NavDropdown title="+ Noticias" id="categoria">
              <NavDropdown.Item>Politica</NavDropdown.Item>
              <NavDropdown.Item>Economia</NavDropdown.Item>
              <NavDropdown.Item>Salud</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Fotos
                <FontAwesomeIcon icon={faCameraRetro} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="mx-5" exact={true} to="/login" variant="dark" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink  className="mx-5" exact={true} to="/suscripcion-form" variant="secondary" className="nav-link" activeClassName="active">
              <Button variant="outline-dark">Suscribirse</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar expand="lg" bg="dark" variant="dark" className=" ">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-around">
            <Nav.Link href="#" className="">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
            <Nav.Link href="#pricing" className="">
              Lista de Noticias
            </Nav.Link>
            <Nav.Link href="#pricing" className="">
              Lista de Categorias
            </Nav.Link>
            <Nav.Link href="#" className="mx-5">
              Nueva Categoria
            </Nav.Link>
            <Nav.Link href="#" className="mx-5">
              Nueva Noticia
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Button variant="success" size="sm">
                Cerrar Sesion
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
