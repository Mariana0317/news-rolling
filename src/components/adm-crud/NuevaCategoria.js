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
          "Se lo reenviara a la lista de categorias",
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
    <div className="formularios">
      <Container className="text-dark rounded">
      <h2 className="text-center mb-5">Nueva Categoria</h2>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group controlId="nombreCategoria" className="text-center">
            <Form.Label className="formLetraCategoria">
              <strong>Nombre*</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Máximo 15 caracteres"
              className="text-center border border-dark"
              maxLength="15"
              required
              onChange={(e) => setTituloCategoria(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="descripcionCategoria"
            className="text-center pt-4"
          >
            <Form.Label className="formLetraCategoria">
              <strong>Descripción*</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Ingrese aqui una breve descripcion de la categoria"
              className="text-center border border-dark"
              maxLength="150"
              required
              onChange={(e) => setDescripcionCategoria(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-center py-3">
            {validated ? (
              <Alert variant={"danger"} className="w-75">
                Complete los campos que son obligatorios
              </Alert>
            ) : null}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="danger"
              type="submit"
              className="border border-dark"
            >
              <strong>Enviar Categoría</strong>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default withRouter(NuevaCategoria);
