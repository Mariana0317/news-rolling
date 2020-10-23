import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const HeaderAdm = () => {
  const desloguear = async () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("nivel", { path: "/" });
    window.location.reload();
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="d-flex justify-content-center"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-around">
            <NavLink
              exact={true}
              to="/adm-inicio/listanoticias"
              className="mx-5 nav-link"
              activeClassName="active"
            >
              Lista de Noticias
            </NavLink>
            <NavLink
              exact={true}
              to="/adm-inicio/listacategoria"
              className="mx-5 nav-link"
              activeClassName="active"
            >
              Lista de Categorias
            </NavLink>
            <NavLink
              exact={true}
              to="/adm-inicio/listacategoria/nueva"
              className="mx-5 nav-link"
              activeClassName="active"
            >
              Nueva Categoria
            </NavLink>
            <NavLink
              exact={true}
              to="/adm-inicio/listanoticias/nueva"
              className="mx-5 nav-link"
              activeClassName="active"
            >
              Nueva Noticia
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="danger" onClick={() => desloguear()}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderAdm;
