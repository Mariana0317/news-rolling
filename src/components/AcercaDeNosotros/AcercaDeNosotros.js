import React from "react";
import Caracteristicas from "./Caracteristicas";
import Nosotros from "./Nosotros";

const AcercaDeNosotros = () => {

  const nos = [
  {
    nombre: "Franco Luna",
    img: "img/franco.jpg",
    descripcion: "La experiencia profesional de Franco es en finanzas corporativas, administración, marketing, ventas y contabilidad. Ha construido 6 empresas como startups y ha hecho crecer cada una a un nivel conocido y respetado a nivel nacional. Las industrias en las que creó estas empresas incluyen indumentaria, televisión y deportes.",
    linkedin: "https://www.linkedin.com/in/franco-agustin-luna-63b169192/",
    git: "https://github.com/francooluna1",
    instagram: "https://www.instagram.com/francooluna1/",
    twitter: "https://twitter.com/FrancooLuna1"
  },
  {
    nombre: "Leonardo Palavecino",
    img: "img/leo.jpg",
    descripcion: "Se graduó de la universidad con títulos de enseñanza en educación tanto en psicología como en educación física. Luego obtuvo una licenciatura en negocios y posteriormente su MBA en marketing. Se embarcó en una carrera muy exitosa como entrenador y educador universitario.",
    sm: "Scrum master",
    linkedin: "https://www.linkedin.com/in/leonardo-palavecino",
    git: "https://github.com/leo43161"
  },
  {
    nombre: "Hernán Sánchez Ortiz",
    img: "img/hernan.jpg",
    descripcion: "Se graduó en ciencias de la computación en la universidad politécnica de Valencia. Es nuestro experto en tecnología. Le encantan los drones  y fundó su propia empresa para fabricarlos en Argentina y venderlos al mundo, su principal comprador es la República Popular de China. "
  },
  {
    nombre: "Mariana Granara",
    img: "img/mariana.jpg",
    descripcion: "Es la única mujer del grupo, por ende la encargada de poner orden y verificar que todo funcione. Le gustan las artes, es cantante, bailarina y diseñadora de interiores. Obvio es nuestra especialista en espectáculos. Estudió en la universidad de La Soborna en París. "
  },
  {
    nombre: "Mauro Cardone",
    img: "img/mauro.jpg",
    descripcion: "Se graduó en 2014 en la universidad de San Pablo Brasil, habla con fluidez  portugués e ingles y es nuestro corresponsal en Brasil. Le apasiona escribir sobre política exterior y geopolitica. En estos momento se encuentra haciendo su doctorado. Es el gamer del grupo. "
  },
  {
    nombre: "Fabricio Oller",
    img: "img/fabri.jpg",
    descripcion: "Estudió climatología en la universidad de oxford, es nuestro especialista en meteorología. Actualmente se encuentra investigando sobre el cambio climático. En sus varias misiones a la Antártida tuvo que aprender sobre primeros auxilios para ayudar a sus compañeros."
  }
  ]


  return (
    <div className="container text-center">
      <img
          src={process.env.PUBLIC_URL + "img/rolling-news-frase.png"}
          className="mt-4 mb-4 w-75"
          alt="logo imagen"
        />
      <section className="container-fluid mx-auto row justify-content-center m-0 px-2 px-md-0">
        <Nosotros nos={nos[0]}></Nosotros>
        <Nosotros nos={nos[1]}></Nosotros>
        <Nosotros nos={nos[2]}></Nosotros>
        <Nosotros nos={nos[3]}></Nosotros>
        <Nosotros nos={nos[4]}></Nosotros>
        <Nosotros nos={nos[5]}></Nosotros>
      </section>
      <section className="container mx-auto row justify-content-center m-0 px-2 px-md-0">
        <br />
        <Caracteristicas></Caracteristicas>
      </section>
    </div>
  );
};

export default AcercaDeNosotros;
