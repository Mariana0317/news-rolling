import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JumboHeader from "./components/commons/JumboHeader";
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
import HeaderAdm from "./components/commons/HeaderAdm";
import Sections from './components/Sections/Sections';
import Notice from "./components/Notice/Notice";
import Login from "./components/principal/Login";


function App() {
  const [loader, setLoader] = useState(true);

  const cargarHeader = loader ? <JumboHeader></JumboHeader> : <HeaderAdm></HeaderAdm>;

  return (
    <Router>
      
      <Switch>
        <Route exact path={"/sections/:category"}>
          <Sections />
        </Route>
        <Route exact path={"/sections/:category/:id"}>
          <Notice />
        </Route>
        <Route exact path="/">
          {cargarHeader}
          <Inicio></Inicio>
        </Route>
        <Route exact path="/categoria-noticias">
          {cargarHeader}
          <CategoriasNoticias></CategoriasNoticias>
        </Route>
        <Route exact path="/detalle-noticia">
          {cargarHeader}
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/suscripcion-form">
          {cargarHeader}
          <FormSuscripcion></FormSuscripcion>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/adm-inicio">
          {cargarHeader}
          <InicioAdm></InicioAdm>
        </Route>
        <Route exact path="/adm-inicio/listacategoria">
          {cargarHeader}
          <ListaCategorias></ListaCategorias>
        </Route>
        <Route exact path="/adm-inicio/listanoticias">
          {cargarHeader}
          <ListaNoticias></ListaNoticias>
        </Route>
        <Route exact path="/adm-inicio/listacategoria/nueva">
          {cargarHeader}
          <NuevaCategoria></NuevaCategoria>
        </Route>
        <Route exact path="/adm-inicio/listanoticias/nuevanoticia">
          {cargarHeader}
          <NuevaNoticia></NuevaNoticia>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
