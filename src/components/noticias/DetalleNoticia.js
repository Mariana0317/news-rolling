import React from "react";
import Card from "react-bootstrap/Card";
import "./DetalleNoticia.css";
import { withRouter } from "react-router-dom";
import CategoriaNoticiaInicio from "../principal/CategoriaNoticiasInicio/CategoriaNoticiaInicio";

const DetalleNoticia = (props) => {
  const noticiaRecomendadas = props.noticias.filter((noticias) => {
    return props.noticias !== undefined
      ? noticias._id !== props.noticia._id
      : null
  });
  return (
    <section className="row m-0">
      <div className="pl-3 pr-3 mt-5 mb-5 col-12 col-lg-8">
        <div className="container">
          <h1 className='mt-3 titulo'>{props.noticia !== undefined ? props.noticia.titulo : null}</h1>
          <h6 className="py-3 descripcion">
            {props.noticia !== undefined ? props.noticia.descripcion : null}
          </h6>
          <p className="mt-3 capitalize">
            Por:{" "}
            <strong>
              {props.noticia !== undefined ? props.noticia.autor : null}
            </strong>
          </p>
          <span className='descripcion'>
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
            <span className="pie">
              {props.noticia !== undefined
                ? props.noticia.pieDeImgPrincipal
                : null}
            </span>
          </div>
          <div className="my-5">
            <p className="contenido">
              {props.noticia !== undefined ? props.noticia.contenido : null}
            </p>
          </div>
          {props.noticia !== undefined ? (props.noticia.imgSecundaria === "" ? null : <Card className="bg-dark text-white">
              <Card.Img
                src={
                  props.noticia !== undefined
                    ? props.noticia.imgSecundaria
                    : null
                }
                alt={`${
                  props.noticia !== undefined
                    ? `img-secundaria${props.noticia._id}`
                    : null
                }`}
              />
            </Card>) : null}
            <span className="pie">
              {props.noticia !== undefined
                ? props.noticia.pieDeImgSecundaria
                : null}
            </span>
        </div>
      </div>
      <div className="pl-3 pr-3 mt-5 mb-5 col-12 col-lg-4 seccion">
        <h3 className="recomendadas my-3">Noticias Recomendadas</h3>
        <CategoriaNoticiaInicio
          noticia={noticiaRecomendadas[0]}
        ></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio
          noticia={noticiaRecomendadas[1]}
        ></CategoriaNoticiaInicio>
        <CategoriaNoticiaInicio
          noticia={noticiaRecomendadas[2]}
        ></CategoriaNoticiaInicio>
      </div>
    </section>
  );
};

export default withRouter(DetalleNoticia);
