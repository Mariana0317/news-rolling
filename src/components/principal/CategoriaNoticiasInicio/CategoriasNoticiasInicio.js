import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CategoriaNoticiaInicio from "./CategoriaNoticiaInicio";

const CategoriaNoticias = () => {
  return (
    <div className="p-0 w-100">
      <ListGroup variant="flush">
        <ListGroup.Item>
            <h1>Politica</h1>
        </ListGroup.Item>
        <CategoriaNoticiaInicio></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio></CategoriaNoticiaInicio>
      </ListGroup>
    </div>
  );
};

export default CategoriaNoticias;
