import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CardsNoticias = (props) => {
  const eliminarNoticia = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la noticia?",
      text: "No podras revertir el cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resultado = await fetch(`https://rolling-news.herokuapp.com/news/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (resultado.status === 200) {
            Swal.fire("Eliminada", "La noticia fue eliminada", "success");
          }

          props.setActualizarNoticias(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="p-1">
      <Card className="border border-dark shadow-sm">
        <Card.Img
          variant="top"
          src={props.noticia.imgPrincipal}
          height="200"
        />
        <Card.Body>
          <Card.Title className="textoTitulo">
            {props.noticia.titulo}
          </Card.Title>
          <Card.Text className="textoCuerpo">
            <p>{props.noticia.descripcion}</p>
          </Card.Text>
          <Card.Text className="capitalize">
            <p><strong>Categoria: </strong>
            {props.noticia.categoria}</p>
            <p><strong>Fecha: </strong>
            {props.noticia.fecha}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Link
                className="btn btn-info w-100 p-2"
                to={`/adm-inicio/listanoticias/editarnoticia/${props.noticia._id}`}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </Col>
            <Col>
              <Link
                className="btn btn-dark w-100 p-2"
                to={`/detalle-noticia/${props.noticia._id}`}
              >
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </Col>
            <Col>
              <Button
                className="btn btn-danger w-100 p-2"
                onClick={() => eliminarNoticia(props.noticia._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardsNoticias;
