import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const CardCategoriaNoticias = (props) => {
  return (
    <div className="col-4 mb-4">
      <Card>
        <img src={""} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{"item.titulo"}</h5>
          <p class="card-text" style={{ height: "100px", overflow: "hidden" }}>
            {"item.texto"}
          </p>
          <Link
            to={`/sections/${"item.categoria"}/${"item.id"}`}
            class="btn btn-primary"
          >
            ver mas
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CardCategoriaNoticias;
