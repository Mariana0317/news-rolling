import React, { useState, useEffect } from "react";
import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/commons/Footer";
import Inicio from "./components/principal/Inicio";
import CategoriasNoticias from "./components/noticias/CategoriasNoticias";
import DetalleNoticia from "./components/noticias/DetalleNoticia";
import FormSuscripcion from "./components/principal/FormSuscripcion";
import ListaCategorias from "./components/adm-crud/ListaCategorias";
import ListaNoticias from "./components/adm-crud/ListaNoticias";
import NuevaCategoria from "./components/adm-crud/NuevaCategoria";
import NuevaNoticia from "./components/adm-crud/NuevaNoticia";
import HeaderAdm from "./components/commons/HeaderAdm";
import Sections from "./components/Sections/Sections";
import Notice from "./components/Notice/Notice";
import Login from "./components/principal/Login";
import EditarNoticias from "./components/adm-crud/EditarNoticias";
import EditarCategoria from "./components/adm-crud/EditarCategoria";
import Error404 from "./components/error404/Error404";
import PaginaAcercaDeNosotros from "./components/AcercaDeNosotros/AcercaDeNosotros";
import Fotos from "./components/fotos/Fotos";
import Header from "./components/commons/Header";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [actualizarNoticias, setActualizarNoticias] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [actualizarCategorias, setActualizarCategorias] = useState(true);
  const [admin, setAdmin] = useState([]);
  const [actualizarAdmin, setActualizarAdmin] = useState(true);
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [actualizarNoticiasDestacadas, setActualizarNoticiasDestacadas] = useState(true);

  useEffect(() => {
    if (actualizarNoticias) {
      consultarNoticias();
      setActualizarNoticias(false);
    }
  }, [actualizarNoticias]);

  const consultarNoticias = async () => {
    try {
      const respuesta = await fetch("https://rolling-news.herokuapp.com/news");
      const resultado = await respuesta.json();
      setNoticias(resultado);
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
      const respuesta = await fetch(
        "https://rolling-news.herokuapp.com/categorias"
      );
      const resultado = await respuesta.json();
      setCategorias(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (actualizarAdmin) {
      consultarAdmin();
      setActualizarAdmin(false);
    }
  }, [actualizarAdmin]);

  const consultarAdmin = async () => {
    try {
      const respuesta = await fetch("https://rolling-news.herokuapp.com/adm");
      const resultado = await respuesta.json();
      setAdmin(resultado[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (actualizarNoticiasDestacadas) {
      consultarNoticiasDestacadas();
      setActualizarNoticiasDestacadas(false);
    }
  }, [actualizarNoticiasDestacadas]);

  const consultarNoticiasDestacadas = async () => {
    try {
      const respuesta = await fetch(
        "https://rolling-news.herokuapp.com/highlights"
      );
      const resultado = await respuesta.json();
      setNoticiasDestacadas(resultado); //Quitar despues para usar bd
    } catch (error) {
      console.log(error);
    }
  };
  console.log(noticiasDestacadas);
  console.log(admin);
  return (
    <Router>
      <Header categorias={categorias} admin={admin} setAdmin={setAdmin}></Header>
      {admin.logueado === true ? <HeaderAdm admin={admin} setActualizarAdmin={setActualizarAdmin}></HeaderAdm> : null}
      <Switch>
        <Route exact path="/">
          <Inicio
            noticiasDestacadas={noticiasDestacadas}
            noticias={noticias}
          ></Inicio>
        </Route>
        <Route exact path={"/secciones/:categoria"}>
          <Sections />
        </Route>
        <Route exact path={"/secciones/:categoria/:id"}>
          <Notice />
        </Route>
        <Route exact path="/categoria-noticias">
          <CategoriasNoticias></CategoriasNoticias>
        </Route>
        <Route exact path="/detalle-noticia/:id" render={(props)=>{
          const idNoticia = props.match.params.id;
          let noticia = {};
          const noticiaEncontrada = noticias.find((noticia)=> noticia._id === idNoticia);
          const noticiaDestacadaEncontrada = noticiasDestacadas.find((noticia)=> noticia._id === idNoticia);
          if(noticiaEncontrada === undefined){
            noticia = noticiaDestacadaEncontrada;
          }else{
            noticia = noticiaEncontrada;
          }
          return(
            <DetalleNoticia noticias={noticias}  noticia={noticia}></DetalleNoticia>
          )
        }}>
        </Route>
        <Route exact path="/fotos">
          <Fotos noticias={noticias}></Fotos>
        </Route>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route
          exact
          path="/categoria-noticias/:noticiasxCategoria"
          render={(props) => {
            //quiero tomar el parametro de la url
            const parametroCategoria = props.match.params.noticiasxCategoria;
            return (
              <CategoriasNoticias
                 categoria={parametroCategoria}
                 noticias={noticias}
              ></CategoriasNoticias>
            );
          }}
        ></Route>
        <Route exact path="/detalle-noticia">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/suscripcion-form">
          <FormSuscripcion></FormSuscripcion>
        </Route>
        <Route exact path="/login">
          <Login setAdmin={setAdmin}
                  setActualizarAdmin={setActualizarAdmin}
            admin={admin}></Login>
        </Route>
        <Route exact path="/acercadenosotros">
          <PaginaAcercaDeNosotros></PaginaAcercaDeNosotros>
        </Route>
        <Route exact path="/adm-inicio">
          <Inicio
            noticiasDestacadas={noticiasDestacadas}
            noticias={noticias}
          ></Inicio>
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
            noticiasDestacadas = {noticiasDestacadas}
            setActualizarNoticiasDestacadas = {setActualizarNoticiasDestacadas}
            setActualizarNoticias={setActualizarNoticias}
          ></ListaNoticias>
        </Route>
        <Route exact path="/adm-inicio/listacategoria/nueva">
          <NuevaCategoria
            setActualizarCategorias={setActualizarCategorias}
          ></NuevaCategoria>
        </Route>
        <Route exact path="/adm-inicio/listanoticias/nueva">
          <NuevaNoticia
            categorias={categorias}
            setActualizarCategorias={setActualizarCategorias}
            setActualizarNoticias={setActualizarNoticias}
          ></NuevaNoticia>
        </Route>
        <Route
          exact
          path="/adm-inicio/listanoticias/editarnoticia/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            const noticiaEncontrada = noticias.find(
              (noticia) => noticia._id === idNoticia
            );
            return (
              <EditarNoticias
                noticiaEncontrada={noticiaEncontrada}
                setActualizarNoticias={setActualizarNoticias}
                categorias={categorias}
                setActualizarCategorias={setActualizarCategorias}
              ></EditarNoticias>
            );
          }}
        ></Route>
        <Route
          exact
          path="/adm-inicio/listanoticias/editarnoticiadestacada/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            const noticiaEncontrada = noticiasDestacadas.find(
              (noticia) => noticia._id === idNoticia
            );
            return (
              <EditarNoticias
                noticiaEncontrada={noticiaEncontrada}
                setActualizarNoticias={setActualizarNoticias}
                categorias={categorias}
                setActualizarCategorias={setActualizarCategorias}
              ></EditarNoticias>
            );
          }}
        ></Route>
        <Route
          exact
          path="/adm-inicio/listacategoria/editarcategoria/:id"
          render={(props) => {
            const idCategoria = props.match.params.id;
            const categoriaEncontrada = categorias.find(
              (categoria) => categoria._id === idCategoria
            );
            return (
              <EditarCategoria
                categoriaEncontrada={categoriaEncontrada}
                setActualizarCategorias={setActualizarCategorias}
              ></EditarCategoria>
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
