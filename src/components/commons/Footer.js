import React from "react";
import "./footer.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Card className="footer mt-5">
      <Card.Body className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center mb-4">
          <img
            src={process.env.PUBLIC_URL + "img/rollingnews-text.png"}
            id="logo_text"
          />
          </div>
          <section className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
            <p>
            Somos buscadores de la verdad y contadores de historias.
            Somos testigos de la historia a medida que se desarrolla y explicamos no solo lo que sucedió, sino por qué y lo que significa para usted.
            Defendemos la excelencia en nuestro periodismo y nuestros productos.
            Estamos comprometidos a servirle.
            </p>
          </section>
          <section className="col-sm-12 col-md-4 col-lg-4 mt-4 text-center">
            <h5 className="">Siguenos</h5>
            <span className="mx-3">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </span>
            <span className="mx-3">
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
            </span>
            <span className="mx-3">
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </span>
          </section>
        </div>
      </Card.Body>

      <Card.Footer id="top">
        <Navbar>
          <Nav className="container-fluid d-flex justify-content-around">
            <div className="row">
              <Nav.Link className="col-sm-12 col-md-3 col-lg-3 text-center text-light">
                © 2020 Rolling News
              </Nav.Link>
              <Nav.Link href="#" className="col-sm-12 col-md-3 col-lg-3 text-center text-light">
                Bases Leagles
              </Nav.Link>
              <Nav.Link href="#" className="col-sm-12 col-md-3 col-lg-3 text-center text-light">
                Politicas de privacidad
              </Nav.Link>
              <Nav.Link href="#" className="col-sm-12 col-md-3 col-lg-3 text-center text-light">
                Politicas de cookies
              </Nav.Link>
            </div>
          </Nav>
        </Navbar>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
