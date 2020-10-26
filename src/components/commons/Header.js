import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardClima from "./CardClima/CardClima";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faCameraRetro,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = (props) => {
  const categoriasSinFotografia = props.categorias.filter((producto) => {
    return producto.titulo !== "fotografia";
  });
  const categoriaFotografia = props.categorias.find((producto) => {
    return producto.titulo === "fotografia";
  });
  const categoriasPrincipales = categoriasSinFotografia.slice(0, 4);
  const categoriasSecundarias = categoriasSinFotografia.slice(4);


  const removeCookiesUser = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("nivel", { path: "/" });
    window.location.href= "/";
  };

  return (
    <div className="">
      <CardClima></CardClima>
      <Container>
        <div className="text-center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "img/rollingnews.png"}
              className="mt-4 mb-4"
              id="logo-header"
              alt="Imagen del logo"
            />
          </Link>
        </div>
      </Container>

      <Navbar expand="md" className="d-flex justify-content-center text-light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container d-flex justify-content-between">
            <NavLink
              className="text-dark text-decoration-none"
              exact={true}
              to="/"
            >
              Inicio <FontAwesomeIcon icon={faHome} />
            </NavLink>

            {props.categorias !== undefined
              ? categoriasPrincipales.map((categoria, indice) => {
                  return (
                    <Link
                      to={`/categoria-noticias/${categoria.titulo}`}
                      className="nav-link"
                      id="opciones"
                      key={indice}
                    >
                      {categoria.titulo}
                    </Link>
                  );
                })
              : null}

            <NavDropdown title="+ Noticias" id="categoria">
              {categoriasSecundarias.map((categoria, indice) =>
                categoria !== undefined ? (
                  <Link
                    to={`/categoria-noticias/${categoria.titulo}`}
                    className="dropdown-item capitalize"
                    id="opciones"
                    key={indice}
                  >
                    {categoria.titulo}
                  </Link>
                ) : null
              )}

              {categoriaFotografia !== undefined ? (
                <div>
                  <NavDropdown.Divider />
                  <Link className="dropdown-item" to="/fotos">
                    Fotos
                    <FontAwesomeIcon icon={faCameraRetro} />
                  </Link>
                </div>
              ) : null}
            </NavDropdown>
            {props.user ? (
              props.user.usuario === 2 ? (
                <Button variant="danger" onClick={() => removeCookiesUser()}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Button>
              ) : null
            ) : null}

            {cookies.get("id") ? null : (
              <NavLink
                className="text-dark text-decoration-none"
                exact={true}
                to="/login"
              >
                Login <FontAwesomeIcon icon={faUser} />
              </NavLink>
            )}
            {cookies.get("id") ? null : (
              <NavLink exact={true} to="/suscripcion-form">
                <Button variant="outline-dark" id="opciones">
                  Suscribirse
                </Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
    </div>
  );
};

export default Header;
