import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarNoticias = (props) => {
  const tituloNoticiaRef = useRef("");
  const descripcionBreveNoticiaRef = useRef("");
  const imgPrincipalNoticiaRef = useRef("");
  const pieImgPrincipalNoticiaRef = useRef("");
  const descripcionDetalladaNoticiaRef = useRef("");
  const imgSecundariaNoticiaRef = useRef("");
  const pieImgSecundariaNoticiaRef = useRef("");
  const categoriaNoticiaRef = useRef("");
  const autorNoticiaRef = useRef("");
  const fechaNoticiaRef = useRef("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false){
      setValidated(true);
      return;
    }
    setValidated(false);

    const noticiaEditada = {
      tituloNoticia: tituloNoticiaRef.current.value,
      descripcionBreveNoticia: descripcionBreveNoticiaRef.current.value,
      imgPrincipalNoticia: imgPrincipalNoticiaRef.current.value,
      pieImgPrincipalNoticia: pieImgPrincipalNoticiaRef.current.value,
      descripcionDetalladaNoticia: descripcionDetalladaNoticiaRef.current.value,
      imgSecundariaNoticia: imgSecundariaNoticiaRef.current.value,
      pieImgSecundariaNoticia: pieImgSecundariaNoticiaRef.current.value,
      categoriaNoticia: categoriaNoticiaRef.current.value,
      autorNoticia: autorNoticiaRef.current.value,
      fechaNoticia: fechaNoticiaRef.current.value,
    };

    try {
      const consulta = await fetch(
        `http://localhost:4000/noticias/${props.noticiaEncontrada.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaEditada),
        }
      );

      if(consulta.status === 200){
        Swal.fire(
          "Noticia modificada",
          "Se lo reenviara a la seccion de noticias",
          "success"
        );
        props.setActualizarNoticias(true);

        props.history.push("/adm-inicio/listanoticias");

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formNuevaNoticia">
      <Container className="text-dark py-5 rounded">
        <h1 className="text-center display-4 pb-5">Editar Noticia</h1>
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
              ref={tituloNoticiaRef}
              defaultValue={props.noticiaEncontrada.tituloNoticia}
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
              ref={descripcionBreveNoticiaRef}
              defaultValue={props.noticiaEncontrada.descripcionBreveNoticia}
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
                  ref={imgPrincipalNoticiaRef}
                  defaultValue={props.noticiaEncontrada.imgPrincipalNoticia}
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
                  ref={pieImgPrincipalNoticiaRef}
                  defaultValue={props.noticiaEncontrada.pieImgPrincipalNoticia}
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
              ref={descripcionDetalladaNoticiaRef}
              defaultValue={props.noticiaEncontrada.descripcionDetalladaNoticia}
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
                  ref={imgSecundariaNoticiaRef}
                  defaultValue={props.noticiaEncontrada.imgSecundariaNoticia}
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
                  ref={pieImgSecundariaNoticiaRef}
                  defaultValue={props.noticiaEncontrada.pieImgSecundariaNoticia}
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
                  ref={autorNoticiaRef}
                  defaultValue={props.noticiaEncontrada.autorNoticia}
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
                  ref={categoriaNoticiaRef}
                  defaultValue={props.noticiaEncontrada.categoriaNoticia}
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
                  ref={fechaNoticiaRef}
                  defaultValue={props.noticiaEncontrada.fechaNoticia}
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

export default withRouter(EditarNoticias);
