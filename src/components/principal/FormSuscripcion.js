import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";
import "./Login.css";

const FormSuscripcion = (props) => {
  const [nombreYApellido, setNombreYApellido] = useState("");
  const [email, setEmail] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar los campos
    if (
      nombreYApellido.trim() === "" ||
      email.trim() === "" ||
      codigoPostal === "" ||
      localidad === "" ||
      direccion === ""
    ) {
      //Mostrar cartel de error
      setError(true);
      return;
    }
    setError(false);

    const datos = {
      nombreYApellido,
      email,
      codigoPostal,
      localidad,
      direccion,
    };

    console.log(datos);

    Swal.fire(
      "Datos registrados!",
      "Pronto nos pondremos en contacto con usted para finalizar la suscripción.",
      "success"
    );
    props.history.push("/");
  };

  return (
    <div className="formularios">
      <Container className="text-dark rounded">
      <h2 className="text-center mb-5 text-danger">Formulario de suscripción</h2>
      {error ? (
        <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
      ) : null}
      <Form className="my-4" onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="nombreYApellido">
            <Form.Label className="formLetraCategoria"><strong>Nombre completo *</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido y nombre"
              onChange={(e) => setNombreYApellido(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label className="formLetraCategoria"><strong>Correo electrónico *</strong></Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="direccion">
          <Form.Label className="formLetraCategoria"><strong>Domicilio *</strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>

        <Form.Row className="ml-2">
          <Form.Group as={Col} controlId="localidad">
          <Form.Label className="formLetraCategoria"><strong>Localidad</strong></Form.Label>
            <Form.Control
              className="col-sm-10 col-md-10 col-lg-10"
              type="text"
              placeholder="Ingresa el nombre de tu ciudad"
              onChange={(e) => setLocalidad(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="codigoPostal">
          <Form.Label className="formLetraCategoria"><strong>Código postal</strong></Form.Label>
            <Form.Control
              className="col-sm-2 col-md-2 col-lg-2"
              type="number"
              placeholder="Ingresa tu código postal"
              onChange={(e) => setCodigoPostal(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="danger" type="submit" className="mt-5 ml-2">
          Enviar
        </Button>
      </Form>
      </Container>
    </div>
  );
};

export default withRouter(FormSuscripcion);
