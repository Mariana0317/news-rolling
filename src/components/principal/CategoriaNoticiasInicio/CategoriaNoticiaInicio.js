import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const CategoriaNoticiaInicio = () => {
  return (
    <ListGroup.Item action className="border rounded my-2 shadow-sm">
      <div className="d-flex justify-content-between">
        <div className="col-7 p-0">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
            “Personas, no números”: las vidas argentinas truncadas por la covid-19
            </h5>
          </div>
          <p className="mb-1">
          Una serie de microdocumentales homenajea a las primeras víctimas de la pandemia en el país sudamericano
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
