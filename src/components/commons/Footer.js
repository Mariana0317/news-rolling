import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
          <Jumbotron >
  <Container className="d-flex justify-content-between">
      <section className=""><h1>Rolling News</h1></section>
      <section className=""><p>jdsk fjskfjifi skjfsf sljf sfs jlskfjsif s </p></section>
      <section className=""><p><FontAwesomeIcon icon={faFacebook} /></p> <p><FontAwesomeIcon icon={faInstagramSquare} /></p></section>
    
  </Container>
</Jumbotron>
        </div>
    );
};

export default Footer;