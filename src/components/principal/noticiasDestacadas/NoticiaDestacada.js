import React from "react";
import Card from "react-bootstrap/Card";

const NoticiaDestacada2 = () => {
  return (
    <div className="col h-100 px-md-0 px-lg-0 p-0 mb-2">
      <Card className="text-light h-100 m-0 text-md-left text-justify">
        <Card.Body
          className="d-flex p-3 flex-column justify-content-end w-100 h-100 rounded"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.100), rgba(0, 0, 0, 0.600), rgba(0,0,0,0.800)), url(https://imagenes.elpais.com/resizer/I7qG1O0V4NUbI32a_eYLlZt-m8E=/643x361/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WCJ7V7OXBNAE3N5C6TGZ2XQWXU.jpg)",
            backgroundSize: "100% 100%",
          }}
        >
          <div>
            <span className="badge badge-primary"><h6 className="m-0">Informacion</h6></span>
          </div>
          <Card.Title>
            <h2 className="m-0">
              Tras los enfrentamientos con la Policía, ruralistas esperan
              señales de la Casa de Gobierno
            </h2>
          </Card.Title>
          <Card.Footer className="p-0">
            <small className="text-muted">La Gaceta - 10/09/2020</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiaDestacada2;
