import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import LineasCategorias from "./LineasCategorias";

const ListaCategorias = (props) => {
  return (
    <div className="py-5 formularios">
      <Container>
      <h2 className="text-center mb-5 text-danger">Lista de Categorias</h2>
        <ListGroup>
          {props.categorias.map((categoria) => (
            <LineasCategorias
              key={categoria._id}
              id={categoria._id}
              categoria={categoria}
              setActualizarCategorias={props.setActualizarCategorias}
            ></LineasCategorias>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListaCategorias;
