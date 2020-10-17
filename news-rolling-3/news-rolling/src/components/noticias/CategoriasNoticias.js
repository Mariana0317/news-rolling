import React from "react";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import CategoriasNoticiasInicio from "../principal/CategoriaNoticiasInicio/CategoriasNoticiasInicio";

const CategoriasNoticias = (props) => {
  return (
    <Container className="container-fluid">
       <CategoriasNoticiasInicio noticias={props.noticias} categoria={props.categoria} cantidad={100}></CategoriasNoticiasInicio>
    </Container>
  );
};

export default withRouter(CategoriasNoticias);
