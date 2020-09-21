import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CategoriaNoticiaInicio from "./CategoriaNoticiaInicio";

const CategoriaNoticias = (props) => {
  return (
    <div className="p-0 w-100">
      <ListGroup variant="flush">
        <ListGroup.Item className="mb-2">
            <h1>{props.cine[0] !== undefined ? props.cine[0].categoria : null}</h1>
        </ListGroup.Item>
        <CategoriaNoticiaInicio cine={props.cine[0] !== undefined ? props.cine[0] : null}></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio cine={props.cine[1] !== undefined ? props.cine[1] : null}></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio cine={props.cine[0] !== undefined ? props.cine[2] : null}></CategoriaNoticiaInicio>
      </ListGroup>
    </div>
  );
};

export default CategoriaNoticias;
