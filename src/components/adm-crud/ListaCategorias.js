import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import LineasCategorias from "./LineasCategorias";

const ListaCategorias = (props) => {
  return (
    <div className="py-5 formularios">
      <Container>
        <h1 className="text-center display-4 mb-5">Lista de categorias</h1>
        <ListGroup>
          {props.categorias.map((categoria) => (
            <LineasCategorias
              key={categoria.id}
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
