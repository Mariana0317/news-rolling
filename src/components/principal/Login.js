import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Login.css";

const Login = (props) => {
  const cookies = new Cookies();

  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const [formulario, setFormulario] = useState({
    email: "",
    contrasenia: "",
    recordame: false,
  });

  const { email, contrasenia } = formulario;

  useEffect(() => {
    if (cookies.get("id")) {
      props.history.push("/");
    }
  }, [cookies, props.history]);

  const checkBoxHandler = () => {
    if (formulario.recordame) {
      setFormulario({
        ...formulario,
        recordame: false,
      });
    } else {
      setFormulario({
        ...formulario,
        recordame: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    const expresion = /\w+@\w+\.[a-z]/;
    const _recordame = formulario.recordame
      ? new Date(Date.now() + 9.461e10)
      : null;
    if (email.trim() !== "" && contrasenia.trim() !== "") {
      if (expresion.test(email)) {
        try {
          const consulta = await fetch(
            `https://rolling-news.herokuapp.com/users/singin`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                contrasenia: contrasenia,
              }),
            }
          );
          const resultado = await consulta.json();
          console.log(resultado.user);
          if (resultado.match) {
            if (resultado.user.activo) {
              cookies.set("id", resultado.user._id, {
                path: "/",
                expires: _recordame ? _recordame : "",
              });

              cookies.set("nombre", resultado.user.nombre, {
                path: "/",
                expires: _recordame ? _recordame : "",
              });

              cookies.set("email", resultado.user.email, {
                path: "/",
                expires: _recordame ? _recordame : "",
              });

              cookies.set(
                "nivel",
                resultado.user.usuario === 1 ? "Administrador" : "Usuario",
                {
                  path: "/",
                  expires: _recordame ? _recordame : "",
                }
              );

              Swal.fire(
                `Bienvenido ${resultado.user.nombre}!`,
                `Usted se inicio como ${
                  resultado.user.usuario === 1 ? "Administrador" : "Usuario"
                } exitósamente.`,
                "success"
              );
              setError(false);
              props.history.push("/");
            } else {
              Swal.fire({
                icon: "warning",
                title: "Usuario no activado",
                text:
                  "El usuario no fue activado por el administrador, intentelo mas tarde cuando el administrador informe su activacion",
              });
              setError(false);
            }
          } else {
            setError(true);
            setMensajeError("Contraseña no valida");
          }
        } catch (error) {
          console.log(error);
          setError(true);
          setMensajeError("Contraseña no valida");
        }
      } else {
        setError(true);
        setMensajeError("Email inválido");
      }
    } else {
      setError(true);
      setMensajeError("Todos los campos son obligatorios");
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-3">Iniciar sesión</h1>
      <Form className="my-4" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            onChange={handleChange}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="contrasenia">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="contrasenia"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={handleChange}
            value={contrasenia}
          />
        </Form.Group>
        <Form.Group controlId="recordar">
          <Form.Check
            type="checkbox"
            label="Recordarme"
            value={true}
            name="recordame"
            onChange={checkBoxHandler}
          />
        </Form.Group>
        {error ? <Alert variant={"danger"}>{mensajeError}</Alert> : null}
        <Button variant="success" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
