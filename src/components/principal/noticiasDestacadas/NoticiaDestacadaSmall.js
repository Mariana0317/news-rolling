import React from "react";
import Card from 'react-bootstrap/Card';

const NoticiaDestacadaSmall = (props) => {
  return (
    <div className="col h-100 px-md-0 px-0 mb-0 mb-lg-2 rounded">
      <Card className="text-light h-100 m-0 text-md-left text-justify">
        <Card.Body
          className="d-flex p-3 flex-column justify-content-between rounded shadow"
          style={{
            background:
              `linear-gradient(to left, rgba(0,0,0,0.100), rgba(0, 0, 0, 0.400), rgba(0,0,0,0.800)), url(${props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.imgPrincipal : null})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div>
            <span className="badge badge-primary">{props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.categoria : null}</span>
          </div>
          <Card.Title className="m-0">
            <h5 className="m-0">
            {props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.titulo : null}
            </h5>
          </Card.Title>
          <Card.Footer className="p-0">
            <small className="text-muted">{props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.autor : null} - {props.noticiasDestacadas !== undefined ? props.noticiasDestacadas.fecha : null}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiaDestacadaSmall;
