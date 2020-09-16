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
  const descripcionDetalladaNoticiaRef = useRef("");
  const imgSecundariaNoticiaRef = useRef("");
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
      descripcionDetalladaNoticia: descripcionDetalladaNoticiaRef.current.value,
      imgSecundariaNoticia: imgSecundariaNoticiaRef.current.value,
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
    <Container className="bg-dark text-white my-4 py-4">
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <div className="d-flex justify-content-center">
          {validated ? (
            <Alert variant={"danger"} className="w-75">
              Complete los campos que son obligatorios
            </Alert>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group controlId="tituloNoticia" className="w-50 text-center">
            <Form.Label>Titulo*</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              placeholder="Ingrese aqui el titulo de su noticia"
              required
              ref={tituloNoticiaRef}
              defaultValue={props.noticiaEncontrada.tituloNoticia}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            controlId="descripcionBreveNoticia"
            className="w-50 text-center"
          >
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Ingrese aqui una breve descripcion de su noticia"
              className="text-center"
              required
              ref={descripcionBreveNoticiaRef}
              defaultValue={props.noticiaEncontrada.descripcionBreveNoticia}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            controlId="imgPrincipalNoticia"
            className="w-50 text-center"
          >
            <Form.Label>Imagen Principal (URL)*</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              placeholder="Ej: https://images.ole.com.ar/2020/09/08/iMGWVvyx0_320x210__1.jpg"
              required
              ref={imgPrincipalNoticiaRef}
              defaultValue={props.noticiaEncontrada.imgPrincipalNoticia}
            />
          </Form.Group>
        </div>
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
            ref={descripcionDetalladaNoticiaRef}
            defaultValue={props.noticiaEncontrada.descripcionDetalladaNoticia}
          />
        </Form.Group>
        <Form.Group
          controlId="imgSecundariaNoticia"
          className="w-50 text-center"
        >
          <Form.Label>Imagen Secundaria (URL)</Form.Label>
          <Form.Control
            type="text"
            className="text-center"
            placeholder="Ej: https://images.ole.com.ar/2020/09/15/11o2w01An_320x210__1.jpg"
            ref={imgSecundariaNoticiaRef}
            defaultValue={props.noticiaEncontrada.imgSecundariaNoticia}
          />
        </Form.Group>
        <Form.Group controlId="categoriaNoticia" className="w-25">
          <Form.Label>Categoria*</Form.Label>
          <Form.Control
            as="select"
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
        <Row>
          <Col>
            <Form.Group controlId="autorNoticia" className="w-75">
              <Form.Label>Autor*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juanito Barrientos"
                required
                ref={autorNoticiaRef}
                defaultValue={props.noticiaEncontrada.autorNoticia}
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
                ref={fechaNoticiaRef}
                defaultValue={props.noticiaEncontrada.fechaNoticia}
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

export default withRouter(EditarNoticias);
