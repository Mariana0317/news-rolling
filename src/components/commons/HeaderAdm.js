import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";



const HeaderAdm = () => {
  return (
    <Fragment>
      <Navbar expand="lg" bg="dark" variant="dark" className=" ">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="py-auto  w-100 d-flex justify-content-around">
            
            <Nav.Link href="#pricing" className="">
              Lista de Noticias
            </Nav.Link>
            <Nav.Link href="#pricing" className="px-5">
              Lista de Categorias
            </Nav.Link>
            <Nav.Link href="#" className="px-5">
              Nueva Categoria
            </Nav.Link>
            <Nav.Link href="#" className="px-5">
              Nueva Noticia
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Button variant="light" size="sm">
                Cerrar Sesion
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default HeaderAdm;
