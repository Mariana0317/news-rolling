import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NuevaNoticia = () => {
  return (
    <Container className="bg-dark text-white my-4 py-4">
      <Form>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="titulo-Noticia" className="w-50 text-center">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="500 nuevos casos de Covid"
              className="text-center"/>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            controlId="descripcionBreve-Noticia"
            className="w-50 text-center">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
        <Form.Group>
          <Form.File id="imgPrincipal-Noticia" label="Imagen Principal" />
        </Form.Group>
        </div>
        <Form.Group controlId="descripcionDetallada-Noticia" className="text-center">
          <Form.Label>Descripción detallada</Form.Label>
          <Form.Control as="textarea" rows="7" />
        </Form.Group>
        <Form.Group>
          <Form.File id="imgSecundaria-Noticia" label="Imagen Secundaria" />
        </Form.Group>
        <Form.Group controlId="categoria-Noticia" className="w-25">
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select">
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
            <Form.Group controlId="autor-Noticia" className="w-75">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="Juanito Barrientos" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="fecha-Noticia" className="w-75">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                placeholder="27 de Septiembre de 2020"
              />
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

export default NuevaNoticia;
