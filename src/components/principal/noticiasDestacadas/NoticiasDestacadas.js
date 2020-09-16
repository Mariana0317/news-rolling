import React from "react";
import NoticiaDestacada from "./NoticiaDestacada";
import NoticiaDestacadaSmall from "./NoticiaDestacadaSmall";
import "./NoticiasDestacadas.css";

const NoticiasDestacadas = () => {
  return (
    
      <div className="d-flex flex-column flex-lg-row noticias-destacadas mb-3 px-1 px-md-0">
        <div className="col-lg-8 col-12 p-0 m-0 mr-lg-2 rounded shadow">
          <NoticiaDestacada></NoticiaDestacada>
        </div>
        <div className="col-lg-4 col-12 d-flex flex-column flex-md-row flex-lg-column px-1 px-md-0">
          <div className="h-50 mb-2 p-0 rounded shadow">
            <NoticiaDestacadaSmall></NoticiaDestacadaSmall>
          </div>
          <div className="h-50 rounded shadow">
            <NoticiaDestacadaSmall></NoticiaDestacadaSmall>
          </div>
        </div>
      </div>
  );
};

export default NoticiasDestacadas;
