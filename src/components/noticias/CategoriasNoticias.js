import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router-dom";
import CardCategoriaNoticias from "./CardCategoriaNoticias";
import CardGrandeNotDest from "./CardGrandeNotDest";

const CategoriasNoticias = (props) => {
  return (
    <Container className="d-flex flex-row">
        
  <Row  >
    <Col sm={10}>
        <CardGrandeNotDest>  </CardGrandeNotDest>
        </Col>
       
    <Col sm={3} >
        {props.noticiasEnviadas.map((noticias) => <CardCategoriaNoticias key={noticias.id} noticiasxSeccion={noticias}></CardCategoriaNoticias>)}
        
        </Col>
        
  </Row>
  
  </Container>
  );
};

export default withRouter(CategoriasNoticias);
