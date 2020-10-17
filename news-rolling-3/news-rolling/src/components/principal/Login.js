import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router-dom';
import "./Login.css";


const Login = (props) => {
    console.log(props.admin)

    const [error, setError] = useState(false);
    const [mensajeError, setMensajeError] = useState("");

    const [formulario, setFormulario] = useState({
        email: "",
        contrasenia: ""
    });

    const { email, contrasenia } = formulario;

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expresion = /\w+@\w+\.[a-z]/;
        console.log(expresion.test(email))
        if (email.trim() !== "" && contrasenia.trim() !== "") {
            if (expresion.test(email)) {
                setError(false)
                //Preguntar si el correo coincide con el del admin, en caso contrario dar error y mensaje de email no registrado 
                if (email === props.admin.email) {
                    if (contrasenia === props.admin.contraseña) {
                        const adminLog = {
                            "userAdm": "rollingNews1",
                            "email": "rolling.news22@gmail.com",
                            "contraseña": "rolling2225",
                            "logueado": true,
                            "activo": true
                        }
                        try {
                            const consulta = await fetch(
                                `https://rolling-news.herokuapp.com/adm/${props.admin._id}`,
                                {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(adminLog),
                                }
                            );
                            if (consulta.status === 200) {
                                Swal.fire(
                                    "Bienvenido administrador!",
                                    "Usted se inicio como administrador exitósamente.",
                                    "success"
                                );
                                props.setActualizarAdmin(true);
                                props.history.push("/");
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        setError(true);
                        setMensajeError("Contraseña incorrecta.");
                    }
                } else {
                    setError(true);
                    setMensajeError("Email no registrado.");
                }
            } else {
                setError(true);
                setMensajeError("Email inválido")
            }
        } else {
            setError(true);
            setMensajeError("Todos los campos son obligatorios")
        }
    }

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
                        value={email} />
                </Form.Group>

                <Form.Group controlId="contrasenia">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="contrasenia"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={handleChange}
                        value={contrasenia} />
                </Form.Group>
                <Form.Group controlId="recordar">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                {error ? (<Alert variant={'danger'}>
                    {mensajeError}
                </Alert>) : null}
                <Button variant="success" type="submit">
                    Ingresar
                </Button>
            </Form>
        </Container>
    );
};

export default withRouter(Login);