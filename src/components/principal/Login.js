import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router-dom';


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validar los campos
        if (email.trim() === ""
            || contrasenia.trim() === "") {
            //Mostrar cartel de error
            setError(true);
            return;
        } else if (email.toLowerCase() === "admin@rollingnews.com"
            && parseInt(contrasenia) === 1234) {
            props.history.push("/adm-inicio");
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido administrador!',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario inválido',
                text: 'Intente nuevamente!'
            });
        }
    }

    return (
        <Container>
            <h1 className="display-3 text-center my-3">Iniciar sesión</h1>
            {error ? (<Alert variant={'danger'}>
                Todos los campos son obligatorios
            </Alert>) : null}
            <Form className="my-4" onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="contrasenia">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={(e) => setContrasenia(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Ingresar
            </Button>
            </Form>
        </Container>
    );
};

export default withRouter(Login);