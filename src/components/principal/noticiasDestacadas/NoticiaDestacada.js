import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./NoticiasDestacadas.css";

const NoticiaDestacada2 = (props) => {
  return (
    <Link
      to={`/detalle-noticia/${
        props.noticiasDestacadas !== undefined
          ? props.noticiasDestacadas._id
          : null
      }`}
      className="text-none"
    >
      <div
        className="col px-md-0 px-lg-0 p-0 text-none"
        style={{ height: "400px" }}
      >
        <Card className="text-light h-100 m-0 text-md-left text-justify">
          <Card.Body
            className="d-flex p-3 flex-column h-100 w-100 justify-content-end rounded"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.100), rgba(0, 0, 0, 0.600), rgba(0,0,0,0.800)), url(${
                props.noticiasDestacadas !== undefined
                  ? props.noticiasDestacadas.imgPrincipal
                  : null
              })`
            }}
          >
            <div>
            <span className="badge badge-danger">
              <h6 className="m-0 text-light">
                  {props.noticiasDestacadas !== undefined
                    ? props.noticiasDestacadas.categoria
                    : null}
                </h6>
              </span>
            </div>
            <Card.Title>
            <h2 className="m-0 text-light">
                {props.noticiasDestacadas !== undefined
                  ? props.noticiasDestacadas.titulo
                  : null}
              </h2>
            </Card.Title>
            <Card.Footer className="p-0">
              <small className="text-muted">
                {props.noticiasDestacadas !== undefined
                  ? props.noticiasDestacadas.autor
                  : null}{" "}
                -{" "}
                {props.noticiasDestacadas !== undefined
                  ? props.noticiasDestacadas.fecha
                  : null}
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default NoticiaDestacada2;
