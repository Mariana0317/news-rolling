import React from "react";
import NoticiaDestacada from "./NoticiaDestacada";
import NoticiaDestacadaSmall from "./NoticiaDestacadaSmall";
import "./NoticiasDestacadas.css";

const NoticiasDestacadas = (props) => {
  console.log(props.noticiasDestacadas);
  return (

    <div className="d-flex flex-column flex-lg-row noticias-destacadas mb-3 px-1 px-md-0">
      <div className="col-lg-8 col-12 p-0 m-0 mr-lg-2 rounded shadow">
        <NoticiaDestacada
          noticiasDestacadas={props.noticiasDestacadas[0]}
        ></NoticiaDestacada>
      </div>
      <div className="col-lg-4 col-12 d-flex flex-column flex-md-row flex-lg-column px-1 px-md-0">
        <div className="h-50 mb-2 p-0 rounded shadow">
          <NoticiaDestacadaSmall
            noticiasDestacadas={props.noticiasDestacadas[1]}
          ></NoticiaDestacadaSmall>
        </div>
        <div className="h-50 rounded shadow">
          <NoticiaDestacadaSmall
            noticiasDestacadas={props.noticiasDestacadas[2]}
          ></NoticiaDestacadaSmall>
        </div>
      </div>
    </div>
  );
};

export default NoticiasDestacadas;
