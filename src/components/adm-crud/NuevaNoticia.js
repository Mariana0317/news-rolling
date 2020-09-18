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
  const [pieImgPrincipalNoticia, setPieImgPrincipalNoticia] = useState("");
  const [
    descripcionDetalladaNoticia,
    setDescripcionDetalladaNoticia,
  ] = useState("");
  const [imgSecundariaNoticia, setImgSecundariaNoticia] = useState("");
  const [pieImgSecundariaNoticia, setPieImgSecundariaNoticia] = useState("");
  const [categoriaNoticia, setCategoriaNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);

    const noticia = {
      tituloNoticia,
      descripcionBreveNoticia,
      imgPrincipalNoticia,
      pieImgPrincipalNoticia,
      descripcionDetalladaNoticia,
      imgSecundariaNoticia,
      pieImgSecundariaNoticia,
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
          "Se lo reenviara a la lista de noticias",
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

  // let expresion = // 

  return (
    <div className="formularios">
      <Container className="text-dark py-5 rounded">
        <h1 className="text-center display-4 pb-5">Nueva Noticia</h1>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group controlId="tituloNoticia" className="text-center">
            <Form.Label className="formLetraCategoria">
              <strong>Titulo*</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese aqui el titulo de su noticia"
              className="text-center border border-dark"
              maxLength="100"
              required
              onChange={(e) => setTituloNoticia(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            controlId="descripcionBreveNoticia"
            className="text-center pt-4"
          >
            <Form.Label className="formLetraCategoria">
              <strong>Descripción breve*</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Ingrese aqui una breve descripcion de su noticia"
              className="text-center border border-dark"
              maxLength="150"
              required
              onChange={(e) => setDescripcionBreveNoticia(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="imgPrincipalNoticia"
                className="text-center pt-4"
              >
                <Form.Label className="formLetraCategoria">
                  <strong>Imagen principal (URL)*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://images.ole.com.ar/2020/09/08/iMGWVvyx0_320x210__1.jpg"
                  className="text-center border border-dark"
                  required
                  onChange={(e) => setImgPrincipalNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="pieImgPrincipalNoticia"
                className="text-center pt-4"
              >
                <Form.Label className="formLetraCategoria">
                  <strong>Pie de la imagen*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Detalle lo que muesta la imagen principal"
                  className="text-center border border-dark"
                  maxLength="100"
                  required
                  onChange={(e) => setPieImgPrincipalNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group
            controlId="descripcionDetalladaNoticia"
            className="text-center pt-4"
          >
            <Form.Label className="formLetraCategoria">
              <strong>Descripción detallada*</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              placeholder="Ingrese aqui todos los detalles de su noticia"
              className="text-center border border-dark"
              required
              onChange={(e) => setDescripcionDetalladaNoticia(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="imgSecundariaNoticia"
                className="text-center pt-4"
              >
                <Form.Label className="formLetraCategoria">
                  <strong>Imagen secundaria (URL)</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://images.ole.com.ar/2020/09/15/11o2w01An_320x210__1.jpg"
                  className="text-center border border-dark"
                  onChange={(e) => setImgSecundariaNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="pieImgSecundariaNoticia"
                className="text-center pt-4"
              >
                <Form.Label className="formLetraCategoria">
                  <strong>Pie de la imagen</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Detalle lo que muestra la imagen secundaria"
                  className="text-center border border-dark"
                  maxLength="100"
                  onChange={(e) => setPieImgSecundariaNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="autorNoticia" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Autor*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Elva Jonsito"
                  className="text-center border border-dark"
                  required
                  maxLength="30"
                  onChange={(e) => setAutorNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="categoriaNoticia" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Categoria*</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  className="border border-dark"
                  required
                  onChange={(e) => setCategoriaNoticia(e.target.value)}
                >
                  <option value="">Seleccione una..</option>
                  <option value="Actualidad">Actualidad</option>
                  <option value="Espectaculos">Espectáculos</option>
                  <option value="Tecnologia">Tecnología</option>
                  <option value="Deportes">Deportes</option>
                  <option value="Politica">Política</option>
                  <option value="Economia">Economía</option>
                  <option value="Salud">Salud</option>
                  <option value="Fotografia">Fotografía</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="fechaNoticia" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Fecha*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="27 de Septiembre de 2020"
                  className="text-center border border-dark"
                  maxLength="30"
                  required
                  onChange={(e) => setFechaNoticia(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center py-3">
            {validated ? (
              <Alert variant={"danger"} className="w-75">
                Complete los campos que son obligatorios
              </Alert>
            ) : null}
          </div>
          <div className="d-flex justify-content-center">
            <Button variant="light" type="submit" className="border border-dark">
              <strong>Enviar Noticia</strong>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default withRouter(NuevaNoticia);
