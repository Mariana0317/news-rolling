import React from "react";
import "./footer.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Card className="footer mt-5">
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center mb-4">
            <img
              src={process.env.PUBLIC_URL + "img/rollingnews-text.png"}
              id="logo_text"
              alt="imagen del logo"
            />
          </div>
          <section className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center about">
            <p>
              Somos buscadores de la verdad y contadores de historias. Somos
              testigos de la historia a medida que se desarrolla y explicamos no
              solo lo que sucedió, sino por qué y lo que significa para usted.
              Defendemos la excelencia en nuestro periodismo y nuestros
              productos. Estamos comprometidos a servirle.
            </p>
          </section>
          <section className="col-sm-12 col-md-4 col-lg-4 mt-4 text-center">
            <h5 className="">Siguenos</h5>
            <NavLink exact={true} to="error404" className="mx-2">
              <span>
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </span>
            </NavLink>
            <NavLink exact={true} to="error404" className="mx-2">
              <span>
              <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
              </span>
            </NavLink>
            <NavLink exact={true} to="error404" className="mx-2">
              <span>
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </span>
            </NavLink>
          </section>
        </div>
      </Card.Body>

      <Card.Footer id="top">
        <Navbar>
          <Nav className="container-fluid d-flex justify-content-around">
            <div className="row">
              <NavLink
                exact={true}
                to="error404"
                className="col-sm-12 col-md-3 col-lg-3 text-center text-light"
              >
                © 2020 Rolling News
              </NavLink>
              <NavLink
                exact={true}
                to="error404"
                className="col-sm-12 col-md-3 col-lg-3 text-center text-light"
              >
                Politicas de privacidad
              </NavLink>
              <NavLink
                exact={true}
                to="error404"
                className="col-sm-12 col-md-3 col-lg-3 text-center text-light"
              >
                Politicas de cookies
              </NavLink>
              <NavLink
                exact={true}
                to="/acercadenosotros"
                className="col-sm-12 col-md-3 col-lg-3 text-center text-light"
              >
                Acerca de nosotros
              </NavLink>
            </div>
          </Nav>
        </Navbar>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
