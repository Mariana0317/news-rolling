import React, { useState, useEffect } from "react";
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
//import HeaderAdm from "./components/commons/HeaderAdm";
import Sections from "./components/Sections/Sections";
import Notice from "./components/Notice/Notice";
import Login from "./components/principal/Login";
import EditarNoticias from "./components/adm-crud/EditarNoticias";
import EditarCategorias from "./components/adm-crud/EditarCategorias";
import Error404 from "./components/error404/Error404";
import PaginaAcercaDeNosotros from "./components/AcercaDeNosotros/AcercaDeNosotros";
import Header from "./components/commons/Header";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [actualizarNoticias, setActualizarNoticias] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [actualizarCategorias, setActualizarCategorias] = useState(true);

  useEffect(() => {
    if (actualizarNoticias) {
      consultarNoticias();
      setActualizarNoticias(false);
    }
  }, [actualizarNoticias]);

  const consultarNoticias = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/noticias");
      const resultado = await respuesta.json();
      setNoticias(resultado); //Quitar despues para usar bd
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (actualizarCategorias) {
      consultarCategorias();
      setActualizarCategorias(false);
    }
  }, [actualizarCategorias]);

  const consultarCategorias = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/categorias");
      const resultado = await respuesta.json();
      setCategorias(resultado); //Quitar despues para usar bd
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header noticiasEnviadas={noticias}></Header>
      <JumboHeader></JumboHeader>

      <Switch>
        <Route exact path={"/sections/:category"}>
          <Sections />
        </Route>
        <Route exact path={"/sections/:category/:id"}>
          <Notice />
        </Route>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/categoria-noticias/" render={(props) => {
          const lasNoticias = (props.match.params.id)
          console.log("parametro de la url" + lasNoticias);
        }}>
          <CategoriasNoticias noticiasEnviadas={noticias}></CategoriasNoticias>
        </Route>
        <Route exact path="/detalle-noticia">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/suscripcion-form">
          <FormSuscripcion></FormSuscripcion>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/about-us">
          <PaginaAcercaDeNosotros></PaginaAcercaDeNosotros>
        </Route>
        <Route exact path="/adm-inicio">
          <InicioAdm></InicioAdm>
        </Route>
        <Route exact path="/adm-inicio/listacategoria">
          <ListaCategorias
            categorias={categorias}
            setActualizarCategorias={setActualizarCategorias}
          ></ListaCategorias>
        </Route>
        <Route exact path="/adm-inicio/listanoticias">
          <ListaNoticias
            noticias={noticias}
            setActualizarNoticias={setActualizarNoticias}
          ></ListaNoticias>
        </Route>
        <Route exact path="/adm-inicio/listacategoria/nueva">
          <NuevaCategoria
            setActualizarCategorias={setActualizarCategorias}
          ></NuevaCategoria>
        </Route>
        <Route exact path="/adm-inicio/listanoticias/nuevanoticia">
          <NuevaNoticia
            setActualizarNoticias={setActualizarNoticias}
          ></NuevaNoticia>
        </Route>
        <Route
          exact
          path="/adm-inicio/listanoticias/editarnoticia/:id"
          render={(props) => {
            //tomo el id de la url
            const idNoticia = parseInt(props.match.params.id);
            //filtro el arreglo y busco el producto
            const noticiaEncontrada = noticias.find(
              (noticia) => noticia.id === idNoticia
            );
            return (
              <EditarNoticias
                noticiaEncontrada={noticiaEncontrada}
                setActualizarNoticias={setActualizarNoticias}
              ></EditarNoticias>
            );
          }}
        ></Route>
        <Route
          exact
          path="/adm-inicio/listacategoria/editarcategoria/:id"
          render={(props) => {
            //tomo el id de la url
            const idCategoria = parseInt(props.match.params.id);
            //filtro el arreglo y busco el producto
            const categoriaEncontrada = categorias.find(
              (categoria) => categoria.id === idCategoria
            );
            return (
              <EditarCategorias
                categoriaEncontrada={categoriaEncontrada}
                setActualizarCategorias={setActualizarCategorias}
              ></EditarCategorias>
            );
          }}
        ></Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
