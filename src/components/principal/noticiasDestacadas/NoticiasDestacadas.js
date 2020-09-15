import React from "react";
import NoticiaDestacada from "./NoticiaDestacada";
import NoticiaDestacadaSmall from "./NoticiaDestacadaSmall";
import "./NoticiasDestacadas.css";

const NoticiasDestacadas = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center">Noticias Destacadas</h2>
      <hr/>
      <div className="d-flex noticias-destacadas mb-3">
        <div className="col-8 p-0 mr-2 rounded shadow">
          <NoticiaDestacada></NoticiaDestacada>
        </div>
        <div className="col-4 d-flex flex-column px-1">
          <div className="h-50 mb-2 rounded shadow">
            <NoticiaDestacadaSmall></NoticiaDestacadaSmall>
          </div>
          <div className="h-50 rounded shadow">
            <NoticiaDestacadaSmall></NoticiaDestacadaSmall>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasDestacadas;
