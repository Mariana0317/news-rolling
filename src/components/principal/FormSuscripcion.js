import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import Alert from 'react-bootstrap/Alert';
import { withRouter } from 'react-router-dom';

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
        if (nombreYApellido.trim() === ""
            || email.trim() === ""
            || codigoPostal === ""
            || localidad === ""
            || direccion === "") {
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
            direccion
        }

        console.log(datos);

        Swal.fire(
            'Datos registrados!',
            'Pronto nos pondremos en contacto con usted para finalizar la suscripción.',
            'success'
        )
        props.history.push("/");
    }



    return (
        <div className="container">
            <h1 className="display-3 text-center my-3">Formulario de suscripción</h1>
            {error ? (<Alert variant={'danger'}>
                Todos los campos son obligatorios
            </Alert>) : null}
            <Form className="my-4" onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="nombreYApellido">
                        <Form.Label>Nombre completo *</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu apellido y nombre" onChange={(e) => setNombreYApellido(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Correo electrónico *</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="codigoPostal">
                        <Form.Label>Código postal *</Form.Label>
                        <Form.Control type="number" placeholder="Ingresa tu código postal" onChange={(e) => setCodigoPostal(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="localidad">
                        <Form.Label>Localidad *</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el nombre de tu ciudad" onChange={(e) => setLocalidad(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="direccion">
                        <Form.Label>Dirección *</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa tu dirección" onChange={(e) => setDireccion(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Button variant="success" type="submit">
                    Enviar
            </Button>
            </Form>
        </div>
    );
};

export default withRouter(FormSuscripcion);