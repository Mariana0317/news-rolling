import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardClima from "../principal/CardClima/CardClima";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCameraRetro,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="">
      <CardClima></CardClima>
      <Container>
        <div className="text-center">
        <img
          src={process.env.PUBLIC_URL + "img/rollingnews.png"}
          className="mt-4 mb-4"
          id="logo-header"
        />
        </div>
      </Container>

      <Navbar expand="lg" className="text-light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-between ">
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
            <Nav.Link className="">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <Nav.Link className="">
              <Button variant="outline-dark">Suscribirse</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;