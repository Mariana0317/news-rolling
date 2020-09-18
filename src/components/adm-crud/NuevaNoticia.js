import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const NuevaNoticia = (props) => {
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionBreveNoticia, setDescripcionBreveNoticia] = useState("");
  const [imgPrincipalNoticia, setImgPrincipalNoticia] = useState("");
  const [descripcionDetalladaNoticia, setDescripcionDetalladaNoticia] = useState("");
  const [imgSecundariaNoticia, setImgSecundariaNoticia] = useState("");
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false){
      setValidated(true);
      return;
    }
    setValidated(false);

    const noticia = {
      tituloNoticia,
      descripcionBreveNoticia,
      imgPrincipalNoticia,
      descripcionDetalladaNoticia,
      imgSecundariaNoticia,
      categoriaNoticia,
      autorNoticia,
      fechaNoticia,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticia),
      };

      const resultado = await fetch("http://localhost:4000/noticias", cabecera);
      console.log(resultado);
      if (resultado.status === 201) {
        Swal.fire(
          "Noticia enviada!",
          "Se lo reenviara a la seccion de noticias",
          "success"
        );
      }

      props.setActualizarNoticias(true);

      props.history.push("/adm-inicio/listanoticias");

    } catch (error) {
      console.log(error);
    }

    console.log(noticia);
  };

  return (
    <Container className="bg-dark text-white my-4 py-4 rounded">
      <div className="d-flex justify-content-center">
        {validated ? (
          <Alert variant={"danger"} className="w-75">
            Complete los campos que son obligatorios
          </Alert>
        ) : null}
      </div>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Form.Group controlId="categoriaNoticia" className="">
          <Form.Label>Categoria*</Form.Label>
            <Form.Control
            as="select"
            required
            onChange={(e) => setCategoriaNoticia(e.target.value)}
          >
            <option value="">Seleccione una..</option>
            <option value="actualidad">Actualidad</option>
            <option value="espectaculos">Espectáculos</option>
            <option value="tecnologia">Tecnología</option>
            <option value="deportes">Deportes</option>
            <option value="politica">Política</option>
            <option value="economia">Economía</option>
            <option value="salud">Salud</option>
            <option value="fotografia">Fotografía</option>
          </Form.Control>
        </Form.Group>
          <Form.Group controlId="tituloNoticia" className="text-center">
            <Form.Label>Titulo*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese aqui el titulo de su noticia"
              className="text-center"
              required
              onChange={(e) => setTituloNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="descripcionBreveNoticia"
            className="text-center"
          >
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Ingrese aqui una breve descripcion de su noticia" 
              className="text-center"
              required
              onChange={(e) => setDescripcionBreveNoticia(e.target.value)}
            />
          </Form.Group>
        <Form.Group controlId="imgPrincipalNoticia" className="text-center">
            <Form.Label>Imagen Principal (URL)*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.ole.com.ar/2020/09/08/iMGWVvyx0_320x210__1.jpg"
              className="text-center"
              required
              onChange={(e) => setImgPrincipalNoticia(e.target.value)}
            />
          </Form.Group>
        <Form.Group
          controlId="descripcionDetalladaNoticia"
          className="text-center"
        >
          <Form.Label>Descripción detallada*</Form.Label>
          <Form.Control
            as="textarea"
            rows="7"
            placeholder="Ingrese aqui todos los detalles de su noticia"
            required
            onChange={(e) => setDescripcionDetalladaNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="imgSecundariaNoticia" className="text-center">
            <Form.Label>Imagen Secundaria (URL)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.ole.com.ar/2020/09/15/11o2w01An_320x210__1.jpg"
              className="text-center"
              onChange={(e) => setImgSecundariaNoticia(e.target.value)}
            />
          </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="autorNoticia" className="w-75">
              <Form.Label>Autor*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juanito Barrientos"
                required
                onChange={(e) => setAutorNoticia(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="fechaNoticia" className="w-75">
              <Form.Label>Fecha*</Form.Label>
              <Form.Control
                type="text"
                placeholder="27 de Septiembre de 2020"
                required
                onChange={(e) => setFechaNoticia(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center pt-5">
          <Button variant="light" type="submit" size="lg">
             Enviar Noticia
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(NuevaNoticia);
