import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarCategoria = (props) => {
  const tituloCategoriaRef = useRef("");
  const descripcionCategoriaRef = useRef("");
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
      tituloCategoria: tituloCategoriaRef.current.value,
      descripcionCategoria: descripcionCategoriaRef.current.value,
    };

    try {
      const consulta = await fetch(
        `http://localhost:4000/categorias/${props.categoriaEncontrada.id}`,
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
        <Form.Group controlId="nombreCategoria">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Máximo 15 caracteres"
            maxLength="15"
            required
            ref={tituloCategoriaRef}
            defaultValue={props.categoriaEncontrada.tituloCategoria}
          />
        </Form.Group>
        <Form.Group controlId="descripcionCategoria">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder=""
            className=""
            required
            ref={descripcionCategoriaRef}
            defaultValue={props.categoriaEncontrada.descripcionCategoria}
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
