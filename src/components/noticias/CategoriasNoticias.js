import React from "react";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import CategoriasNoticiasInicio from "../principal/CategoriaNoticiasInicio/CategoriasNoticiasInicio";

const CategoriasNoticias = (props) => {
  console.log(props.categoriaEncontrada)
  return (
    <Container className="container-fluid ">
       <CategoriasNoticiasInicio noticias={props.noticias} categoria={props.categoria} cantidad={3}></CategoriasNoticiasInicio>
    </Container>
  );
};

export default withRouter(CategoriasNoticias);
