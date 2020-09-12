import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const CardsNoticias = (props) => {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.noticia.imgPrincipalNoticia}/>
        <Card.Body>
          <Card.Title>{props.noticia.tituloNoticia}</Card.Title>
          <Card.Text>{props.noticia.descripcionBreveNoticia}</Card.Text>
          <Button variant="primary">Ver noticia</Button>
          <Button variant="warning">Editar</Button>
          <Button variant="danger">Eliminar</Button>
        </Card.Body>
      </Card>
  );
};

export default CardsNoticias;
