import React from "react";
import Container from "react-bootstrap/Container";
import CardsNoticias from "./CardsNoticias";

const ListaNoticias = (props) => {
  return (
    <div className="formularios py-5">
      <Container>
        <h2 className="text-center mb-5 text-danger">
          Lista de Noticias Destacadas
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {props.noticiasDestacadas.map((noticia) => (
            <CardsNoticias
              key={noticia._id}
              id={noticia._id}
              noticia={noticia}
              highlight={true}
              setActualizarNoticias={props.setActualizarNoticiasDestacadas}
            ></CardsNoticias>
          ))}
        </div>
        <hr />
        <h2 className="text-center mb-5 text-danger">Lista de Noticias</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {props.noticias.map((noticia) => (
            <CardsNoticias
              key={noticia._id}
              id={noticia._id}
              noticia={noticia}
              highlight={false}
              setActualizarNoticias={props.setActualizarNoticias}
            ></CardsNoticias>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ListaNoticias;
