import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";

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
    <div className="container">
      <h1 className="display-3 text-center my-3">Formulario de suscripción</h1>
      <Form className="my-4" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="nombreYApellido">
            <Form.Label>Nombre completo *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido y nombre"
              name="nombreYApellido"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Correo electrónico *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="codigoPostal">
            <Form.Label>Código postal *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingresa tu código postal"
              name="codigoPostal"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="localidad">
            <Form.Label>Localidad *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre de tu ciudad"
              onChange={handleChange}
              name="localidad"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="direccion">
            <Form.Label>Dirección *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              name="direccion"
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        {error ? (
          <Alert variant={"danger"}>{mensajeError}</Alert>
        ) : null}
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(FormSuscripcion);
