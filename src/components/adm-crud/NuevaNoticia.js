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
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [pieDeImgPrincipal, setPieDeImgPrincipal] = useState("");
  const [contenido, setContenido] = useState("");
  const [imgSecundaria, setImgSecundaria] = useState("");
  const [pieDeImgSecundaria, setPieDeImgSecundaria] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const [validated, setValidated] = useState(false);
  const [destacar, setDestacar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);

    const noticia = {
      titulo,
      descripcion,
      imgPrincipal,
      pieDeImgPrincipal,
      contenido,
      imgSecundaria,
      pieDeImgSecundaria,
      categoria,
      autor,
      fecha,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticia),
      };

      const resultado = await fetch(
        "https://rolling-news.herokuapp.com/news",
        cabecera
      );

      if (destacar) {
        await fetch("https://rolling-news.herokuapp.com/highlights", cabecera);
      }
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
  };

  return (
    <div className="formularios">
      <Container className="text-dark rounded">
        <h2 className="text-center mt-5 text-danger">Nueva Noticia</h2>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group controlId="titulo" className="text-center">
            <Form.Label className="formLetraCategoria">
              <strong>Titulo*</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese aqui el titulo de su noticia"
              className="text-center border border-dark"
              minLength="40"
              maxLength="90"
              required
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="descripcion" className="text-center pt-4">
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
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col className="col-12 col-md-6">
              <Form.Group controlId="imgPrincipal" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Imagen principal (URL)*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://images.ole.com.ar/2020/09/08/iMGWVvyx0_320x210__1.jpg"
                  className="text-center border border-dark"
                  required
                  onChange={(e) => setImgPrincipal(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="pieDeImgPrincipal"
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
                  onChange={(e) => setPieDeImgPrincipal(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="contenido" className="text-center pt-4">
            <Form.Label className="formLetraCategoria">
              <strong>Descripción detallada*</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              placeholder="Ingrese aqui todos los detalles de su noticia"
              className="text-center border border-dark"
              required
              onChange={(e) => setContenido(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="imgSecundaria"
                className="text-center pt-4"
              >
                <Form.Label className="formLetraCategoria">
                  <strong>Imagen secundaria (URL)</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://images.ole.com.ar/2020/09/15/11o2w01An_320x210__1.jpg"
                  className="text-center border border-dark"
                  onChange={(e) => setImgSecundaria(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-6">
              <Form.Group
                controlId="pieDeImgSecundaria"
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
                  onChange={(e) => setPieDeImgSecundaria(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="autor" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Autor*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Elva Jonsito"
                  className="text-center border border-dark"
                  required
                  maxLength="30"
                  onChange={(e) => setAutor(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="categoria" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Categoria*</strong>
                </Form.Label>
                <Form.Control
                  as="select"
                  className="border border-dark"
                  required
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Seleccione una..</option>
                  {props.categorias.map((categoria, indice) => {
                    return (
                      <option
                        value={categoria.titulo}
                        key={indice}
                        className="capitalize"
                      >
                        {categoria.titulo}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-12 col-md-4">
              <Form.Group controlId="fecha" className="text-center pt-4">
                <Form.Label className="formLetraCategoria">
                  <strong>Fecha*</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="27 de Septiembre de 2020"
                  className="text-center border border-dark"
                  maxLength="30"
                  required
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Form.Group>
            </Col>
            <div className="text-center col-12">
              <Form.Check type="checkbox" value={destacar} onChange={()=>{
                destacar ? setDestacar(false) : setDestacar(true)
              }} label={`Destacar Noticia`} />
            </div>
          </Row>
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
              <strong>Enviar Noticia</strong>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default withRouter(NuevaNoticia);
