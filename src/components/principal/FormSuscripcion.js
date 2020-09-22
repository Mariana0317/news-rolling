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
  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");


  const [formulario, setFormulario] = useState({
    nombreYApellido: "",
    email: "",
    codigoPostal: "",
    localidad: "",
    direccion: "",
  });

  let {
    nombreYApellido,
    email,
    codigoPostal,
    localidad,
    direccion,
  } = formulario;

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expresion = /\w+@\w+\.[a-z]/;
    //Validar los campos
    console.log()
    if (nombreYApellido.trim() !== "" &&
      email.trim() !== "" &&
      codigoPostal.trim() !== "" &&
      localidad.trim() !== "" &&
      direccion.trim() !== "") {
      if (expresion.test(email)) {
        Swal.fire(
          "Datos registrados!",
          "Pronto nos pondremos en contacto con usted para finalizar la suscripción.",
          "success"
        );
        props.history.push("/");
      } else {
        setError(true)
        setMensajeError("Email inválido");
        return;
      }

    } else {
      setError(true);
      setMensajeError("Todos los campos son obligatorios");
    }
  };

  return (
    <div className="formularios">
      <Container className="text-dark rounded">
        <h2 className="text-center mt-5 text-danger">Formulario de suscripción</h2>
        <Form className="my-4" onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="nombreYApellido">
              <Form.Label className="formLetraCategoria"><strong>Nombre completo *</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido y nombre"
                name="nombreYApellido"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label className="formLetraCategoria"><strong>Correo electrónico *</strong></Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="direccion">
              <Form.Label className="formLetraCategoria"><strong>Domicilio *</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                name="direccion"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="localidad">
              <Form.Label className="formLetraCategoria"><strong>Localidad</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de tu ciudad"
                onChange={handleChange}
                name="localidad"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="codigoPostal">
              <Form.Label className="formLetraCategoria"><strong>Código postal</strong></Form.Label>
              <Form.Control
                className="col-sm-2 col-md-2 col-lg-2"
                type="number"
                placeholder="Ingresa tu código postal"
                name="codigoPostal"
                onChange={handleChange}
              />
            </Form.Group>

          {error ? (
            <Alert variant={"warning"}>{mensajeError}</Alert>
          ) : null}
          <Button variant="danger" type="submit" className="mt-5 ml-2">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default withRouter(FormSuscripcion);
