import React from "react";
import Card from 'react-bootstrap/Card';

const NoticiaDestacadaSmall = () => {
  return (
    <div className="col h-100 px-md-0 px-0 mb-0 mb-lg-2 rounded">
      <Card className="text-light h-100 m-0 text-md-left text-justify">
        <Card.Body
          className="d-flex p-3 flex-column justify-content-between rounded shadow"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.100), rgba(0, 0, 0, 0.400), rgba(0,0,0,0.800)), url(https://artear-tn-prod.cdn.arcpublishing.com/resizer/TAOdGg9XeDk2er4s4ETeM2tXRBo=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/artear/NK34YAKR3BCQDCQ6Q5NNWBXZLY.jpg)" , 
            backgroundSize: "100% 100%",
          }}
        >
          <div>
            <span className="badge badge-primary">Informacion</span>
          </div>
          <Card.Title className="m-0">
            <h5 className="m-0 text-light">
              Tras los enfrentamientos con la Policía, ruralistas esperan
              señales de la Casa de Gobierno
            </h5>
          </Card.Title>
          <Card.Footer className="p-0">
            <small className="text-muted">La Gaceta - 10/09/2020</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoticiaDestacadaSmall;
