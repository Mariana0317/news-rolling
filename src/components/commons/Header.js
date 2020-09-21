import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardClima from "../principal/CardClima/CardClima";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCameraRetro,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <div className="">
      <CardClima></CardClima>
      <Container>
        <div className="text-center">
          <Link to="/"><img
            src={process.env.PUBLIC_URL + "img/rollingnews.png"}
            className="mt-4 mb-4"
            id="logo-header"
          /></Link>
        </div>
      </Container>

      <Navbar expand="lg" className="text-light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container d-flex justify-content-between">
            <Nav.Link id="opciones">Actualidad</Nav.Link>
            <Nav.Link id="opciones">Espectaculos</Nav.Link>
            <Nav.Link id="opciones">Tecnologia</Nav.Link>
            <Nav.Link id="opciones">Deportes</Nav.Link>
            <NavDropdown title="+ Noticias" id="categoria">
              {props.categorias.map((categoria, indice) =>
                categoria !== undefined ? (
                  <Link
                    to="/sections"
                    className="dropdown-item"
                    id="opciones"
                    key={indice}
                  >
                    {categoria.titulo}
                  </Link>
                ) : null
              )}
              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/fotos">
                Fotos
                <FontAwesomeIcon icon={faCameraRetro} />
              </Link>
            </NavDropdown>
            <NavLink exact={true} to="/login">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <Nav.Link>
              <Button variant="outline-dark" id="opciones">
                Suscribirse
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
