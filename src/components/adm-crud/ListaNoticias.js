import React from "react";
import { Container } from "react-bootstrap";
import CardsNoticias from "./CardsNoticias";
import CardColumns from "react-bootstrap/CardColumns";

const ListaNoticias = (props) => {
  return (
    <div className="formularios py-5">
      <Container>
        <h1 className="text-center display-4 mb-5">Lista de noticias</h1>
        <CardColumns class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex justify-content-justify">    
              {props.noticias.map((noticia) => (
                <CardsNoticias
                  key={noticia.id}
                  noticia={noticia}
                  setActualizarNoticias={props.setActualizarNoticias}
                ></CardsNoticias>
              ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default ListaNoticias;
