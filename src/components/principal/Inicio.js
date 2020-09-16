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
      <section className="container mt-md-2 mt-3">
        <h2 className="text-center">Noticias Destacadas</h2>
        <hr />
        <NoticiasDestacadas></NoticiasDestacadas>
      </section>

      <section className="container d-flex">
        <div className="col-lg-8 col-12 px-1">
          <CategoriasNoticiasInicio></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 border border-dark d-none d-lg-block"></div>
      </section>
    </div>
  );
};

export default Inicio;
