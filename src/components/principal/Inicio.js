import React from "react";
import CardClima from "./CardClima/CardClima";
import CategoriasNoticiasInicio from "./CategoriaNoticiasInicio/CategoriasNoticiasInicio";
import MonedasValores from "./MonedaApi/MonedasValores";
import NoticiasDestacadas from "./noticiasDestacadas/NoticiasDestacadas";

const Inicio = () => {
  return (
    <div>
      <CardClima></CardClima>
      <MonedasValores></MonedasValores>
      <NoticiasDestacadas></NoticiasDestacadas>
      <section className="container d-flex">
        <div className="col-8 px-1">
          <CategoriasNoticiasInicio></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 border border-dark"></div>
      </section>
    </div>
  );
};

export default Inicio;
