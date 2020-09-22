import React from "react";
import CategoriasNoticiasInicio from "./CategoriaNoticiasInicio/CategoriasNoticiasInicio";
import MonedasValores from "./MonedaApi/MonedasValores";
import NoticiasDestacadas from "./noticiasDestacadas/NoticiasDestacadas";
import { Link } from "react-router-dom";

const Inicio = (props) => {
  return (
    <div>
      <MonedasValores></MonedasValores>
      <section className="container mt-md-2 mt-3">
      <h1 className="text-center mt-5">Noticias Destacadas</h1>
        <hr />
        <NoticiasDestacadas
          noticiasDestacadas={props.noticiasDestacadas}
        ></NoticiasDestacadas>

      </section>

      <section className="container d-flex">
        <div className="col-lg-8 col-12 px-1">
          <CategoriasNoticiasInicio noticias={props.noticias} categoria={"deportes"} cantidad={3}></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 d-none d-lg-block">
        <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/banners/3.jpg"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
        </Link>
        <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/banners/1.jpg"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
        </Link>
        </div>
      </section>

      <section className="container">
      <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/banners/CovidBanner.jpg"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
      </Link>
      </section>

      <section className="container d-flex">
        <div className="col-lg-8 col-12 px-1">
          <CategoriasNoticiasInicio noticias={props.noticias} categoria={"actualidad"} cantidad={3}></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 d-none d-lg-block">
        <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/publicidad4.png"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
        </Link>
        </div>
      </section>

      <section className="container d-flex">
        <div className="col-lg-8 col-12 px-1">
          <CategoriasNoticiasInicio noticias={props.noticias} categoria={"cine"} cantidad={3}></CategoriasNoticiasInicio>
        </div>
        <div className="col-4 d-none d-lg-block mt-4">
        <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/publicidad6.jpg"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
        </Link>
        <Link exact={true} to="error404"><img
          src={process.env.PUBLIC_URL + "img/banners/1.jpg"}
          className="mt-4 mb-4 w-100"
          id="logo-header"
          alt="banner covid"
        />
        </Link>
        </div>
      </section>


    </div>
  );
};

export default Inicio;
