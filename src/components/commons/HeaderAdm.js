import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const HeaderAdm = (props) => {
  const desloguear = async () => {
    const admin = {
      activo: true,
      contraseña: "rolling2225",
      email: "rolling.news22@gmail.com",
      logueado: false,
      userAdm: "rollingNews1",
    };
    try {
      const consulta = await fetch(
        `https://rolling-news.herokuapp.com/adm/${props.admin._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admin),
        }
      );

      if (consulta.status === 200) {
        props.setActualizarAdmin(true);
        props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="w-100" />
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
