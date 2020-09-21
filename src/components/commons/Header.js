import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Header = (props) => {

  const categoriaSeleccionada = (categoriaNoticia) => {
    console.log(categoriaNoticia);
  }
  return (
    <div className="">
      <Navbar bg="dark" expand="lg" className=" " fixed="top" variant="dark">
        <Navbar.Brand href="#" className=" px-3">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-between">
            <Link exact={true} to="/" className="pl-5">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link
              exact={true}
              to="/categoria-noticias/actualidad"
              className="nav-link px-3"
             
            >
              Actualidad
            </Link>
            <Link
              exact={true}
              to="/categoria-noticias/espectaculos"
              className="nav-link px-3"
            >
              Espectaculos
            </Link>
            <Link
              exact={true}
              to="/categoria-noticias/tecnologia"
              className="nav-link px-3"
            >
              Tecnologia
            </Link>
            <Link
              exact={true}
              to="/categoria-noticias/deportes"
              className="nav-link px-3"
            >
              Deportes
            </Link>
            <NavDropdown title="Categorias" id="categoria">
              <NavDropdown.Item>
                <Link to="/categoria-noticias/politica">Politica</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria-noticias/economia">Economia</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categoria-noticias/salud">Salud</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/categoria-noticias/foto-galeria">Foto Galeria </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              className="mx-5 btn btn-light"
              exact={true}
              to="/login"
              variant="dark"
              activeClassName="active"
            >
              {" "}
              Ingresar
              <FontAwesomeIcon icon={faUser} className="pl-1" />
            </Link>
            <Link
              className="nav-link px-3 my-auto"
              exact={true}
              to="/suscripcion-form"
              variant="Dark"
              activeClassName="active"
            >
              <Button variant="outline-light">Suscribirse</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
