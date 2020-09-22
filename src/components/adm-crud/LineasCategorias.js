import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LineaCategoria = (props) => {
  const eliminarCategoria = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la categoria?",
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
            `https://rolling-news.herokuapp.com/categorias/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire("Eliminada", "La categoria fue eliminada", "success");
          }

          props.setActualizarCategorias(true);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <ListGroup.Item className="border-bottom border-dark d-flex justify-content-between">
      <h4 className="listaCategorias">{props.categoria.titulo}</h4>
      <div>
        <Link  to={`/categoria-noticias/${props.categoria.titulo}`}>
          <Button className="btn btn-dark py-1 px-2 mx-1">
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </Link>
        <Link
          className="btn btn-info py-1 px-2 mx-1"
          to={`/adm-inicio/listacategoria/editarcategoria/${props.categoria._id}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Link>
        <Button
          className="btn btn-danger py-1 px-2 mx-1"
          onClick={() => eliminarCategoria(props.categoria._id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default LineaCategoria;
