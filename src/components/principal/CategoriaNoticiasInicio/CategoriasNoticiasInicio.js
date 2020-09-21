import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CategoriaNoticiaInicio from "./CategoriaNoticiaInicio";

const CategoriaNoticias = (props) => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    if (props.noticias !== undefined) {
      setCategoria(
        props.noticias.filter((noticias) => {
          return noticias.categoria === props.categoria;
        })
      );
    }
  },[props.noticias]);

  return (
    <div className="p-0 w-100">
      <ListGroup variant="flush">
        <ListGroup.Item className="mb-2">
          <h1>
            {props.Categoria}
          </h1>
        </ListGroup.Item>
        <CategoriaNoticiaInicio
          noticia={categoria[0]}
        ></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio
          noticia={categoria[1]}
        ></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio
          noticia={categoria[2]}
        ></CategoriaNoticiaInicio>
      </ListGroup>
    </div>
  );
};

export default CategoriaNoticias;
