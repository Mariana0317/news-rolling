import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router-dom";
import CardCategoriaNoticias from "./CardCategoriaNoticias";
import CardGrandeNotDest from "./CardGrandeNotDest";

const CategoriasNoticias = () => {
  return (
    <Container>
        
  <Row xs={1} >
    <Col sm={6}>
        <CardGrandeNotDest></CardGrandeNotDest>
        </Col>
       
    <Col sm={3} >
        <CardCategoriaNoticias></CardCategoriaNoticias>
        </Col>
        <Col sm={3}>
        <CardCategoriaNoticias></CardCategoriaNoticias>
        </Col>
  </Row>
  
  </Container>
  );
};

export default withRouter(CategoriasNoticias);
