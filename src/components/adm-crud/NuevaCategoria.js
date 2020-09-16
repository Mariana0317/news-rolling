import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const NuevaCategoria = (props) => {
  const [tituloCategoria, setTituloCategoria] = useState("");
  const [descripcionCategoria, setDescripcionCategoria] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);

    const categoria = {
      tituloCategoria,
      descripcionCategoria,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria),
      };

      const resultado = await fetch(
        "http://localhost:4000/categorias",
        cabecera
      );
      console.log(resultado);
      if (resultado.status === 201) {
        Swal.fire(
          "Categoria enviada!",
          "Se lo reenviara a la seccion de categorias",
          "success"
        );
      }

      props.setActualizarCategorias(true);

      props.history.push("/adm-inicio/listacategoria");
    } catch (error) {
      console.log(error);
    }

    console.log(categoria);
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
            placeholder="Deporte, Politica, etc"
            required
            onChange={(e) => setTituloCategoria(e.target.value)}
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
            onChange={(e) => setDescripcionCategoria(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar categoria
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(NuevaCategoria);
