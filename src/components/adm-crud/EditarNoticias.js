import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarNoticias = () => {
  return (
    <Container className="bg-dark text-white my-4 py-4">
      <Form>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="tituloNoticia" className="w-50 text-center">
            <Form.Label>Titulo*</Form.Label>
            <Form.Control type="text" className="text-center" />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            controlId="descripcionBreveNoticia"
            className="w-50 text-center"
          >
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            controlId="imgPrincipalNoticia"
            className="w-50 text-center"
          >
            <Form.Label>Imagen Principal (URL)*</Form.Label>
            <Form.Control type="text" className="text-center" />
          </Form.Group>
        </div>
        <Form.Group
          controlId="descripcionDetalladaNoticia"
          className="text-center"
        >
          <Form.Label>Descripción detallada*</Form.Label>
          <Form.Control as="textarea" rows="7" />
        </Form.Group>
        <Form.Group controlId="categoriaNoticia" className="w-25">
          <Form.Label>Categoria*</Form.Label>
          <Form.Control as="select">
            <option>Seleccione una..</option>
            <option>Actualidad</option>
            <option>Espectáculos</option>
            <option>Tecnología</option>
            <option>Deportes</option>
            <option>Política</option>
            <option>Economía</option>
            <option>Salud</option>
            <option>Fotografía</option>
          </Form.Control>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="autorNoticia" className="w-75">
              <Form.Label>Autor*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="fechaNoticia" className="w-75">
              <Form.Label>Fecha*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center pt-5">
          <Button variant="light" type="submit" size="lg">
            Subir noticia
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(EditarNoticias);
