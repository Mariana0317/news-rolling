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
          <Nav className="container d-flex justify-content-between">
            <Nav.Link className="" id="opciones">Actualidad</Nav.Link>
            <Nav.Link className="" id="opciones">Espectaculos</Nav.Link>
            <Nav.Link className="" id="opciones">Tecnologia</Nav.Link>
            <Nav.Link className="" id="opciones">Deportes</Nav.Link>
            <NavDropdown title="+ Noticias" id="categoria">
              <NavDropdown.Item id="opciones">Politica</NavDropdown.Item>
              <NavDropdown.Item id="opciones">Economia</NavDropdown.Item>
              <NavDropdown.Item id="opciones">Salud</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Fotos
                <FontAwesomeIcon icon={faCameraRetro} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="" exact={true} to="/login">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact={true} to="/suscripcion-form">
              <Button variant="outline-dark" id="opciones">Suscribirse</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;