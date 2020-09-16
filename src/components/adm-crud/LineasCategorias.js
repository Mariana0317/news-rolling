import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const LineaCategoria = (props) => {
    const eliminarCategoria = (id) => {
        Swal.fire({
          title: "¿Estas seguro de eliminar la categoria?",
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
                `http://localhost:4000/categorias/${id}`,
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
    <ListGroup.Item>
        <h3>{props.categoria.tituloCategoria}</h3>
        <Button variant="primary">Ver categoria</Button>
        <Link className="btn btn-success" to={`/adm-inicio/listanoticias/editarcategoria/${props.categoria.id}`}>Editar</Link>
        <Button
          variant="danger"
          onClick={() => eliminarCategoria(props.categoria.id)}
        >
          Eliminar
        </Button>
    </ListGroup.Item>
  );
};

export default LineaCategoria;
