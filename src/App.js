import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Inicio from "./components/principal/Inicio";
import CategoriasNoticias from "./components/noticias/CategoriasNoticias";
import DetalleNoticia from "./components/noticias/DetalleNoticia";
import FormSuscripcion from "./components/principal/FormSuscripcion";
import InicioAdm from "./components/principal/InicioAdm";
import ListaCategorias from "./components/adm-crud/ListaCategorias";
import ListaNoticias from "./components/adm-crud/ListaNoticias";
import NuevaCategoria from "./components/adm-crud/NuevaCategoria";
import NuevaNoticia from "./components/adm-crud/NuevaNoticia";

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarAPI();
  },[]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/noticias");
      const resultado = await respuesta.json();
      console.log(resultado);
      setNoticias(resultado); //Quitar despues para usar bd
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/categoria-noticias">
          <CategoriasNoticias></CategoriasNoticias>
        </Route>
        <Route exact path="/detalle-noticia">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/suscripcion-form">
          <FormSuscripcion></FormSuscripcion>
        </Route>
        <Route exact path="/adm-inicio">
          <InicioAdm></InicioAdm>
        </Route>
        <Route exact path="/adm-inicio/listacategoria">
          <ListaCategorias></ListaCategorias>
        </Route>
        <Route exact path="/adm-inicio/listanoticias">
          <ListaNoticias noticias={noticias}></ListaNoticias>
        </Route>
        <Route exact path="/adm-inicio/listacategoria/nueva">
          <NuevaCategoria></NuevaCategoria>
        </Route>
        <Route exact path="/adm-inicio/listanoticias/nuevanoticia">
          <NuevaNoticia></NuevaNoticia>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
