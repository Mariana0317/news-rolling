import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CategoriaNoticiaInicio = (props) => {
  const noticia = props.cine !== undefined ? props.cine : null;
  console.log(noticia)  
  return (
    <ListGroup.Item action className="border rounded my-2 shadow-sm">
      <div className="d-flex justify-content-between">
        <div className="col-md-7 col-12 p-0">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              { noticia !== undefined ? noticia.titulo : null }
            </h5>
          </div>
          <p className="mb-1">
          {/* {props.cine !== undefined ? props.cine.titulo : null} */}
          </p>
          <small>Fecha de Publicacion: {/* props.cine !== undefined ? props.cine.fecha : null */}</small>
        </div>
        <div className="col-md-4 d-none d-md-block p-0 h-100 my-auto">
          <img
            src={""/* props.cine !== undefined ? props.cine.imgPrincipal: null */}
            alt="noticia1"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default CategoriaNoticiaInicio;
