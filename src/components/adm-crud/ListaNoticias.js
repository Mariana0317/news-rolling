import React from "react";
import { Container } from "react-bootstrap";
import CardsNoticias from "./CardsNoticias";
import CardColumns from "react-bootstrap/CardColumns";

const ListaNoticias = (props) => {
  return (
    <div className="formularios py-5">
      <Container>
        <h2 className="text-center mb-5 text-danger">
          Lista de Noticias Destacadas
        </h2>
        <CardColumns class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex justify-content-justify">
          {props.noticiasDestacadas.map((noticia) => (
            <CardsNoticias
              key={noticia._id}
              id={noticia._id}
              noticia={noticia}
              highlight={true}
              setActualizarNoticias={props.setActualizarNoticiasDestacadas}
            ></CardsNoticias>
          ))}
        </CardColumns>
        <hr />
        <h2 className="text-center mb-5 text-danger">Lista de Noticias</h2>
        <CardColumns class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex justify-content-justify">
          {props.noticias.map((noticia) => (
            <CardsNoticias
              key={noticia._id}
              id={noticia._id}
              noticia={noticia}
              highlight={false}
              setActualizarNoticias={props.setActualizarNoticias}
            ></CardsNoticias>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default ListaNoticias;
