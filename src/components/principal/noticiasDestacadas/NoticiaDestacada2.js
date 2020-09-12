import React from "react";
import Card from 'react-bootstrap/Card';

const NoticiaDestacada2 = () => {
  return (
    <div className="col px-md-0 px-2 mb-2 noticia-destacada">
      <Card className="text-light h-100 m-0 text-md-left text-justify">
        <Card.Body
          className="d-flex p-3 flex-column justify-content-end"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/e0/82/4a/e0824a16a568316ce5055b7cfb5e6a98.jpg)",
            backgroundSize: "100% 100%",
          }}
        >
          <div><span className="badge badge-primary">Informacion</span></div>
          <Card.Title>Tras los enfrentamientos con la Policía, ruralistas esperan señales de la Casa de Gobierno</Card.Title>
          <Card.Footer className="p-0">
            <small className="text-muted">La Gaceta - 10/09/2020</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
    
  );
};

export default NoticiaDestacada2;
