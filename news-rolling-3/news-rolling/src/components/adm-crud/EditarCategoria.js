import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarCategoria = (props) => {
  const tituloRef = useRef("");
  const descripcionRef = useRef("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);

    const categoriaEditada = {
      titulo: tituloRef.current.value,
      descripcion: descripcionRef.current.value,
    };

    try {
      const consulta = await fetch(
        `https://rolling-news.herokuapp.com/categorias/${props.categoriaEncontrada._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaEditada),
        }
      );

      if (consulta.status === 200) {
        Swal.fire(
          "Categoria modificada",
          "Se lo reenviara a la seccion de categorias",
          "success"
        );
        props.setActualizarCategorias(true);

        props.history.push("/adm-inicio/listacategoria");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <div className="d-flex justify-content-center">
          {validated ? (
            <Alert variant={"danger"} className="w-75">
              Complete los campos que son obligatorios
            </Alert>
          ) : null}
        </div>
        <Form.Group controlId="titulo">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="15 caracteres"
            className="lowercase"
            maxLength="15"
            required
            ref={tituloRef}
            defaultValue={props.categoriaEncontrada.titulo}
          />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder=""
            className=""
            required
            ref={descripcionRef}
            defaultValue={props.categoriaEncontrada.descripcion}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar categoria
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(EditarCategoria);
