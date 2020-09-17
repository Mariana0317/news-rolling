import React from "react";
import Caracteristicas from "./Caracteristicas";
import Nosotros from "./Nosotros";

const AcercaDeNosotros = () => {
  return (
    <div>
      <h2 className="text-center">Nuestro equipo</h2>
      <hr />
      <section className="container-fluid mx-auto row justify-content-center m-0 px-2 px-md-0">
        <Nosotros></Nosotros>
        <Nosotros></Nosotros>
        <Nosotros></Nosotros>
        <Nosotros></Nosotros>
      </section>
      <section className="container mx-auto row justify-content-center m-0 px-2 px-md-0">
          <br/>
          <Caracteristicas></Caracteristicas>
      </section>
    </div>
  );
};

export default AcercaDeNosotros;
