import React from "react";
import Card from "react-bootstrap/Card";
import "./DetalleNoticia.css";
import { withRouter } from "react-router-dom";
import CategoriaNoticiaInicio from "../principal/CategoriaNoticiasInicio/CategoriaNoticiaInicio";

const DetalleNoticia = (props) => {
  console.log(props.noticia);
  return (
    <section className="row m-0">
      <div className="pl-3 pr-3 mt-5 mb-5 col-9">
        <div className="container">
          <h1>{props.noticia !== undefined ? props.noticia.titulo : null}</h1>
          <h4>
            {props.noticia !== undefined ? props.noticia.descripcion : null}
          </h4>
          <p>
            Por:{" "}
            <strong>
              {props.noticia !== undefined ? props.noticia.autor : null}
            </strong>
          </p>
          <span>
            {props.noticia !== undefined ? props.noticia.fecha : null}
          </span>

          <div>
            <Card className="bg-dark text-white">
              <Card.Img
                src={
                  props.noticia !== undefined
                    ? props.noticia.imgPrincipal
                    : null
                }
                alt={`${
                  props.noticia !== undefined
                    ? `img-principal${props.noticia._id}`
                    : null
                }`}
              />
            </Card>
            <span>
              {props.noticia !== undefined
                ? props.noticia.pieDeImgPrincipal
                : null}
            </span>
          </div>
          <div className="mt-3 mb-3">
            <p className="parrafo">
              {props.noticia !== undefined ? props.noticia.contenido : null}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-3 pr-3 mt-5 mb-5 col-3 border">
        <CategoriaNoticiaInicio></CategoriaNoticiaInicio>
      </div>
    </section>
  );
};

export default withRouter(DetalleNoticia);
