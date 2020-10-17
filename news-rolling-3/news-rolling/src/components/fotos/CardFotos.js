import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardFotos = (props) => {
  return (
    <div className="px-md-4 py-md-3 px-0 my-2 col-md-6 col-12">
      <Link
        className="text-none"
        to={`/detalle-noticia/${
          props.noticia !== undefined ? props.noticia._id : null
        }`}
      >
        <Card className="p-0 h-100 d-flex flex shadow">
          <Card.Img
            variant="top"
            className="img-fotos"
            src={props.noticia.imgPrincipal}
          />
          <Card.Body>
            <Card.Title className="m-0 card-title">
              {props.noticia.titulo}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CardFotos;
