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
      <Jumbotron fluid className="mb-auto">
        <Container>
          <h1 className="text-center ">Rolling News</h1>
          <p></p>
        </Container>
      </Jumbotron>

      <Navbar bg="light" expand="lg" className=" ">
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-between ">
            <NavLink className="ml-5" exact={true} to="/">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
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
            <NavLink className="" exact={true} to="/login">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink className="" exact={true} to="/suscripcion-form">
              <Button variant="outline-dark">Suscribirse</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;