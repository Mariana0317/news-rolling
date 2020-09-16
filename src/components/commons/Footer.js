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
    <Card className="w-100 text-center footer">
      <Card.Body className=" w-100 d-flex justify-content-around">
        <section className="w-25 align-self-center">
          <h1 className="">Rolling News</h1>
        </section>
        <section className=" w-25 align-self-center">
          <p className="">
            Sunt consectetur eu dolor id et nisi nisi aute mollit nulla sunt
            sunt commodo tempor. Aute esse proident in duis aliqua sunt.
            Occaecat sunt enim ullamco cillum labore culpa cupidatat. Occaecat
            excepteur duis adipisicing velit nostrud excepteur cupidatat Lorem
            consequat non fugiat.{" "}
          </p>
        </section>
        <section className="d-flex justify-content-center align-items-center w-25">
          <h6 className="align-self-start">Seguinos</h6>
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
      </Card.Body>
      <Card.Footer className="">
        <Navbar
          expand="md"
          className=""
          bg="dark"
          variant="Dark"
        >
          <Nav className="mr-auto w-100 d-flex justify-content-around ">
            <Nav.Link className="mr-">© 2020 Rolling News</Nav.Link>
            <Nav.Link href="#" className="ml-5 mr-2">
              Bases Leagles
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              Politicas de privacidad
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              Politicas de cookies
            </Nav.Link>
          </Nav>
        </Navbar>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
