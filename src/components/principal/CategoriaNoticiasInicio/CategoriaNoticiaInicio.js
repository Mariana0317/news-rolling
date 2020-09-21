import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const CategoriaNoticiaInicio = (props) => {
  return (
    <Link className="text-none" to={`/detalle-noticia/${props.noticia !== undefined ? props.noticia._id : null}`}>
      <ListGroup.Item action className="border rounded my-2 shadow-sm">
        <div className="d-flex justify-content-between">
          <div className="col-md-7 col-12 p-0">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                {props.noticia !== undefined ? props.noticia.titulo : null}
              </h5>
            </div>
            <p className="mb-1">
              {props.noticia !== undefined ? props.noticia.titulo : null}
            </p>
            <small>
              Fecha de Publicacion:{" "}
              {props.noticia !== undefined ? props.noticia.fecha : null}
            </small>
          </div>
          <div className="col-md-4 d-none d-md-block p-0 h-100 my-auto">
            <img
              src={
                props.noticia !== undefined ? props.noticia.imgPrincipal : null
              }
              alt="noticia1"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </ListGroup.Item>
    </Link>
  );
};

export default CategoriaNoticiaInicio;
