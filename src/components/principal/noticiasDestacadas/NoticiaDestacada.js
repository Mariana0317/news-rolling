import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./NoticiasDestacadas.css";


const NoticiaDestacada2 = (props) => {

  console.log(props.noticiasDestacadas)
  console.log(props.noticiasDestacadas !== undefined ? props.noticiasDestacadas : null)  

  return (
    <div className="col px-md-0 px-lg-0 p-0" style={{height:"400px"}}>
      <Card className="text-light h-100 m-0 text-md-left text-justify">
        <Card.Body
          className="d-flex p-3 flex-column justify-content-end w-100 h-100 rounded"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.100), rgba(0, 0, 0, 0.600), rgba(0,0,0,0.800)), url(${props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.imgPrincipal : null})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div>
            <span className="badge badge-primary"><h6 className="m-0">{props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.categoria : null}</h6></span>
          </div>
          <Card.Title>
            <h2 className="m-0">
            {props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.titulo : null}
            </h2>
          </Card.Title>
          <Card.Footer className="p-0">
            <small className="text-muted">{props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.autor : null} - {props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.fecha : null}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiaDestacada2;
