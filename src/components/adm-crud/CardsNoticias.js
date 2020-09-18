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
          const resultado = await fetch(
            `http://localhost:4000/noticias/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(resultado);
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
      <Card className="border border-dark">
        <Card.Img
          variant="top"
          src={props.noticia.imgPrincipalNoticia}
          height="200"
        />
        <Card.Body>
          <Card.Title className="textoTitulo">{props.noticia.tituloNoticia}</Card.Title>
          <Card.Text className="textoCuerpo">
            {props.noticia.descripcionBreveNoticia}
            <br />
            <br />
          </Card.Text>
          <Card.Text>  
            <strong>Categoria: </strong>
            {props.noticia.categoriaNoticia}
            <br />
            <br />
            <strong>Fecha: </strong>
            {props.noticia.fechaNoticia}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Link
                className="btn btn-info w-100 p-2"
                to={`/adm-inicio/listanoticias/editarnoticia/${props.noticia.id}`}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </Col>
            <Col>
              <Link className="btn btn-dark w-100 p-2">
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </Col>
            <Col>
              <Button
                className="btn btn-danger w-100 p-2"
                onClick={() => eliminarNoticia(props.noticia.id)}
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
