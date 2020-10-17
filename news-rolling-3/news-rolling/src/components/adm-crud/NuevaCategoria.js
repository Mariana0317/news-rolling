import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const NuevaCategoria = (props) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
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
      titulo,
      descripcion,
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
        "https://rolling-news.herokuapp.com/categorias",
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
        <h2 className="text-center mt-5 text-danger">Nueva Categoria</h2>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group controlId="nombre" className="text-center">
            <Form.Label className="formLetraCategoria">
              <strong>Nombre*</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="15 caracteres"
              className="text-center border border-dark lowercase"
              maxLength="15"
              required
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="descripcion" className="text-center pt-4">
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
              onChange={(e) => setDescripcion(e.target.value)}
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
