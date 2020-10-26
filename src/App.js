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
import Login from "./components/principal/Login";
import EditarNoticias from "./components/adm-crud/EditarNoticias";
import EditarCategoria from "./components/adm-crud/EditarCategoria";
import Error404 from "./components/error404/Error404";
import PaginaAcercaDeNosotros from "./components/AcercaDeNosotros/AcercaDeNosotros";
import Fotos from "./components/fotos/Fotos";
import Header from "./components/commons/Header";
import Cookies from "universal-cookie";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [actualizarNoticias, setActualizarNoticias] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [actualizarCategorias, setActualizarCategorias] = useState(true);
  const [actualizarUsers, setActualizarUsers] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [
    actualizarNoticiasDestacadas,
    setActualizarNoticiasDestacadas,
  ] = useState(true);

  const cookies = new Cookies();

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
      const noticias = resultado.filter((noticia) => {
        return noticia.destacado === false;
      });
      setAllNews(resultado);
      setNoticias(noticias);
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
    const usuario = users.find((usuario) => {
      return usuario._id === cookies.get("id");
    });
    setUser(usuario);
  }, [users, cookies]);

  const consultarUsers = async () => {
    try {
      const respuesta = await fetch("https://rolling-news.herokuapp.com/users");
      const resultado = await respuesta.json();
      setUsers(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (actualizarUsers) {
      setActualizarUsers(false);
      consultarUsers();
    }
  }, [actualizarUsers]);

  useEffect(() => {
    if (actualizarNoticiasDestacadas) {
      consultarNoticiasDestacadas();
      setActualizarNoticiasDestacadas(false);
    }
  }, [actualizarNoticiasDestacadas]);

  const consultarNoticiasDestacadas = async () => {
    try {
      const respuesta = await fetch("https://rolling-news.herokuapp.com/news");
      const resultado = await respuesta.json();
      const noticias = resultado.filter((noticia) => {
        return noticia.destacado === true;
      });
      setNoticiasDestacadas(noticias);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header categorias={categorias} user={user} setUser={setUser}></Header>
      {user !== undefined ? (
        user.usuario === 1 ? (
          <HeaderAdm user={user}></HeaderAdm>
        ) : null
      ) : null}
      <Switch>
        <Route exact path="/">
          <Inicio
            noticiasDestacadas={noticiasDestacadas}
            noticias={noticias}
          ></Inicio>
        </Route>
        <Route exact path="/categoria-noticias">
          <CategoriasNoticias></CategoriasNoticias>
        </Route>
        <Route
          exact
          path="/detalle-noticia/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            let noticia = {};
            const noticiaEncontrada = noticias.find(
              (noticia) => noticia._id === idNoticia
            );
            const noticiaDestacadaEncontrada = noticiasDestacadas.find(
              (noticia) => noticia._id === idNoticia
            );
            if (noticiaEncontrada === undefined) {
              noticia = noticiaDestacadaEncontrada;
            } else {
              noticia = noticiaEncontrada;
            }
            return (
              <DetalleNoticia
                noticias={noticias}
                noticia={noticia}
              ></DetalleNoticia>
            );
          }}
        ></Route>
        <Route exact path="/fotos">
          <Fotos noticias={allNews}></Fotos>
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
                noticias={allNews}
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
          <Login setUser={setUser} user={user}></Login>
        </Route>
        <Route exact path="/acercadenosotros">
          <PaginaAcercaDeNosotros></PaginaAcercaDeNosotros>
        </Route>
        {user !== undefined ? (
          user.usuario === 1 ? (
            <div>
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
                  noticiasDestacadas={noticiasDestacadas}
                  setActualizarNoticiasDestacadas={
                    setActualizarNoticiasDestacadas
                  }
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
                  const noticiaEncontrada = allNews.find(
                    (noticia) => noticia._id === idNoticia
                  );
                  return (
                    <EditarNoticias
                      noticiaEncontrada={noticiaEncontrada}
                      setActualizarNoticias={setActualizarNoticias}
                      setActualizarNoticiasDestacadas={
                        setActualizarNoticiasDestacadas
                      }
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
            </div>
          ) : null
        ) : null}
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
