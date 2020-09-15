import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const CardsNoticias = (props) => {
  const eliminarNoticia = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la noticia?",
      text: "No podras revertir el cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo eliminar!",
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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.noticia.imgPrincipalNoticia} />
      <Card.Body>
        <Card.Title>{props.noticia.tituloNoticia}</Card.Title>
        <Card.Text>{props.noticia.descripcionBreveNoticia}</Card.Text>
        <Button variant="primary">Ver noticia</Button>
        <Link className="btn btn-success" to={`/adm-inicio/listanoticias/editarnoticia/${props.noticia.id}`}>Editar</Link>
        <Button
          variant="danger"
          onClick={() => eliminarNoticia(props.noticia.id)}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardsNoticias;
