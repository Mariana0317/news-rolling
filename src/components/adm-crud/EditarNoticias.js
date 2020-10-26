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
  const tituloRef = useRef("");
  const descripcionRef = useRef("");
  const imgPrincipalRef = useRef("");
  const pieDeImgPrincipalRef = useRef("");
  const contenidoRef = useRef("");
  const imgSecundariaRef = useRef("");
  const pieDeImgSecundariaRef = useRef("");
  const categoriaRef = useRef("");
  const autorRef = useRef("");
  const fechaRef = useRef("");
  const destacadoRef = useRef(false);
  const [validated, setValidated] = useState(false);
  /*   const [destacar, setDestacar] = useState(false) */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setValidated(false);

    const noticiaEditada = {
      titulo: tituloRef.current.value,
      descripcion: descripcionRef.current.value,
      imgPrincipal: imgPrincipalRef.current.value,
      pieDeImgPrincipal: pieDeImgPrincipalRef.current.value,
      contenido: contenidoRef.current.value,
      imgSecundaria: imgSecundariaRef.current.value,
      pieDeImgSecundaria: pieDeImgSecundariaRef.current.value,
      categoria: categoriaRef.current.value,
      autor: autorRef.current.value,
      fecha: fechaRef.current.value,
      destacado: destacadoRef.current.checked,
    };
    console.log(noticiaEditada);
    try {
      const consulta = await fetch(
        `https://rolling-news.herokuapp.com/news/${props.noticiaEncontrada._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaEditada),
        }
      );

      if (consulta.status === 200) {
        Swal.fire(
          "Noticia modificada",
          "Se lo reenviara a la seccion de noticias",
          "success"
        );
        props.setActualizarNoticias(true);
        props.setActualizarNoticiasDestacadas(true);

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
              ref={tituloRef}
              defaultValue={props.noticiaEncontrada.titulo}
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
              ref={descripcionRef}
              defaultValue={props.noticiaEncontrada.descripcion}
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
                  ref={imgPrincipalRef}
                  defaultValue={props.noticiaEncontrada.imgPrincipal}
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
                  ref={pieDeImgPrincipalRef}
                  defaultValue={props.noticiaEncontrada.pieDeImgPrincipal}
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
              ref={contenidoRef}
              defaultValue={props.noticiaEncontrada.contenido}
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
                  ref={imgSecundariaRef}
                  defaultValue={props.noticiaEncontrada.imgSecundaria}
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
                  ref={pieDeImgSecundariaRef}
                  defaultValue={props.noticiaEncontrada.pieDeImgSecundaria}
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
                  ref={autorRef}
                  defaultValue={props.noticiaEncontrada.autor}
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
                  ref={categoriaRef}
                  defaultValue={props.noticiaEncontrada.categoria}
                >
                  <option value="">Seleccione una..</option>
                  {props.categorias.map((categoria, indice) => {
                    return (
                      <option value={categoria.titulo} key={indice}>
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
                  ref={fechaRef}
                  defaultValue={props.noticiaEncontrada.fecha}
                />
              </Form.Group>
            </Col>
            <div className="text-center col-12">
              <Form.Check
                type="checkbox"
                label="Destacar Noticia"
                ref={destacadoRef}
                defaultChecked={props.noticiaEncontrada.destacado}
              />
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
              variant="light"
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

export default withRouter(EditarNoticias);
