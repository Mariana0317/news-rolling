import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
//import { Nav.Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCameraRetro,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="">
      <h1 className="text-center my-5">Rolling News</h1>

      <Navbar bg="light" expand="lg" className="d-flex justify-content-around py-3">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link className="mx-4">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
            <Nav.Link className="mx-5">Actualidad</Nav.Link>
            <Nav.Link className="mx-5">Espectaculos</Nav.Link>
            <Nav.Link className="mx-5">Tecnologia</Nav.Link>
            <Nav.Link className="mx-5">Deportes</Nav.Link>
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
            <Nav.Link className="mx-5">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link  className="mx-5">
              <Button variant="outline-dark">Suscribirse</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className=" d-flex justify-content-center"
      >
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="mx-5">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-5">
              Lista de Noticias
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-5">
              Lista de Categorias
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="success">Cerrar Sesion</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
