import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom';

const HeaderAdm = () => {
    return (
        <div>
            <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="d-flex justify-content-center"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto w-100 d-flex justify-content-around">
            <NavLink exact={true} to="/adm-inicio/listanoticias" className="mx-5 nav-link" activeClassName="active">
              Lista de Noticias
            </NavLink>
            <NavLink exact={true} to="/adm-inicio/listacategoria" className="mx-5 nav-link" activeClassName="active">
              Lista de Categorias
            </NavLink>
            <NavLink exact={true} to="/adm-inicio/listacategoria/nueva" className="mx-5 nav-link" activeClassName="active">
              Nueva Categoria
            </NavLink>
            <NavLink exact={true} to="/adm-inicio/listanoticias/nueva" className="mx-5 nav-link" activeClassName="active">
              Nueva Noticia
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="success">Cerrar Sesion</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderAdm;
