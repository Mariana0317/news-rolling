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
  }, [props.noticias, props.categoria]);

  const cantidadDeNoticias = categoria.slice(0,props.cantidad);

  return (
    <div className="p-0 w-100">
      <ListGroup variant="flush">
        <ListGroup.Item className="mb-2">
          <h1>{props.categoria}</h1>
        </ListGroup.Item>
        {cantidadDeNoticias.map((noticia)=>{
          return(<CategoriaNoticiaInicio noticia={noticia} key={noticia._id}></CategoriaNoticiaInicio>)
        })}
      </ListGroup>
    </div>
  );
};

export default CategoriaNoticias;
