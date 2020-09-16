import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NuevaCategoria = () => {
  return (
    <Container className="my-4">
      <Form>
        <Form.Group controlId="nueva-Categoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" placeholder="Deporte, Politica, etc"/>
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar categoria
        </Button>
      </Form>
    </Container>
  );
};

export default NuevaCategoria;
