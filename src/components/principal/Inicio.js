import React from "react";
import CategoriasNoticiasInicio from "./CategoriaNoticiasInicio/CategoriasNoticiasInicio";
import MonedasValores from "./MonedaApi/MonedasValores";
import NoticiasDestacadas from "./noticiasDestacadas/NoticiasDestacadas";

const Inicio = (props) => {
  return (
    <div>
      <MonedasValores></MonedasValores>
      <section className="container mt-md-2 mt-3">
        <h2 className="text-center">Noticias Destacadas</h2>
        <hr />
        <NoticiasDestacadas
          noticiasDestacadas={props.noticiasDestacadas}
        ></NoticiasDestacadas>

      </section>

      <section className="container d-flex">
        <div className="col-lg-8 col-12 px-1">
          <CategoriasNoticiasInicio noticias={props.noticias} categoria={"cine"}></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 border border-dark d-none d-lg-block"></div>
      </section>
    </div>
  );
};

export default Inicio;
