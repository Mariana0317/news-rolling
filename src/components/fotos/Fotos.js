import React, { useState, useEffect } from "react";
import CardFotos from "./CardFotos";
import "./Fotos.css";

const Fotos = (props) => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    if (props.noticias !== undefined) {
        setCategoria(
        props.noticias.filter((noticias) => {
          return noticias.categoria === "Fotos";
        })
      );
    }
  }, [props.noticias]);

  return (
    <div className="mt-3">
      <h2 className="container">FOTOS</h2>
      <hr />
      <section className="row container-fluid mx-auto mt-3">
        {categoria.map((noticia) => (
          <CardFotos noticia={noticia} key={noticia._id}></CardFotos>
        ))}
      </section>
    </div>
  );
};

export default Fotos;
