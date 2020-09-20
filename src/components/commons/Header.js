import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <Navbar bg="dark" expand="lg" className=" " fixed="top" variant="dark">
        <Navbar.Brand href="#" className=" px-3">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-between">
            <NavLink exact={true} to="/" className="pl-5">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink
              exact={true}
              to="/categoria-noticias"
              className="nav-link px-3"
            >
              Actualidad
            </NavLink>
            <NavLink
              exact={true}
              to="/categoria-noticias"
              className="nav-link px-3"
            >
              Espectaculos
            </NavLink>
            <NavLink
              exact={true}
              to="/categoria-noticias"
              className="nav-link px-3"
            >
              Tecnologia
            </NavLink>
            <NavLink
              exact={true}
              to="/categoria-noticias"
              className="nav-link px-3"
            >
              Deportes
            </NavLink>
            <NavDropdown title="Categorias" id="categoria">
              <NavDropdown.Item>
                <Link to="/categoria-noticias">Politica</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria-noticias">Economia</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria-noticias">Salud</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/categoria-noticias">Galeria de fotos</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              className="mx-5 btn btn-light"
              exact={true}
              to="/login"
              variant="dark"
              activeClassName="active"
            >
              {" "}
              Ingresar
              <FontAwesomeIcon icon={faUser} className="pl-1" />
            </NavLink>
            <NavLink
              className="nav-link px-3 my-auto"
              exact={true}
              to="/suscripcion-form"
              variant="Dark"
              activeClassName="active"
            >
              <Button variant="outline-light">Suscribirse</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
