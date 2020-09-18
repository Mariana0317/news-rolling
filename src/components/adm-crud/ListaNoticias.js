import React from "react";
import { Container } from "react-bootstrap";
import CardsNoticias from "./CardsNoticias";
import CardDeck from "react-bootstrap/CardDeck";

const ListaNoticias = (props) => {
  return (
    <div className="formularios py-5">
      <Container>
        <h1 className="text-center display-4 mb-5">Lista de noticias</h1>
        <CardDeck>    
              {props.noticias.map((noticia) => (
                <CardsNoticias
                  key={noticia.id}
                  noticia={noticia}
                  setActualizarNoticias={props.setActualizarNoticias}
                ></CardsNoticias>
              ))}
        </CardDeck>
      </Container>
    </div>
  );
};

export default ListaNoticias;
