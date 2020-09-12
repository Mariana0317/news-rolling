import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CardsNoticias from "./CardsNoticias";

const ListaNoticias = (props) => {
  return (
    <div className="container my-5">
        <h1 className="text-center display-4 mb-5">Lista de noticias</h1>
        <ListGroup>
            {
                props.noticias.map((noticia) => <CardsNoticias key={noticia.id} noticia={noticia}></CardsNoticias>)
            }
        </ListGroup>
    </div>
  );
};

export default ListaNoticias;
