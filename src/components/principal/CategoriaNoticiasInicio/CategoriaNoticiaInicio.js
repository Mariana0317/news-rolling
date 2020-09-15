import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CategoriaNoticiaInicio = () => {
  return (
    <ListGroup.Item action>
      <div className="d-flex justify-content-between">
        <div className="col-7 p-0">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              El Partido Comunista de Venezuela denunció que está recibiendo
              “ataques desproporcionados" del régimen de Nicolás Maduro
            </h5>
          </div>
          <p className="mb-1">
            Sus líderes acusan al dictador de llevar adelante una política
            “liberal y entreguista” y se unieron a los partidos rebeldes del
            chavismo que armaron la lista Alternativa Popular Revolucionaria
            para las elecciones parlamentarias
          </p>
          <small>Fecha de Publicacion: 11/8/2020</small>
        </div>
        <div className="col-4 p-0 h-100 my-auto">
          <img
            src={process.env.PUBLIC_URL + "/img/noticia1.jpg"}
            alt="noticia1"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default CategoriaNoticiaInicio;
