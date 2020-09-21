import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CardCategoriaNoticias from "./CardCategoriaNoticias";
//import CardGrandeNotDest from "./CardGrandeNotDest";

const CategoriasNoticias = (props) => {
  console.log(props.categoriaEncontrada)
  return (
    <Container className="container-fluid ">
      <h1>{
        // props.categoriaEncontrada[0].titulo 
        }</h1>

      <Row>
        

        <Col sm={3}>
          
            <CardCategoriaNoticias
              
            ></CardCategoriaNoticias>
          
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(CategoriasNoticias);
