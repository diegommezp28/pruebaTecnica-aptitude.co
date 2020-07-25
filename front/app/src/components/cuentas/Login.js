import React, { useState } from 'react';
import { Col, Row, Card, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

    let [infoUser, setInfoUser] = useState({ username: "", password: "" });

    function onSubmit(e) {
        e.preventDefault();
        console.log('submit');

    }

    function onChange(e) {
        infoUser[e.target.name] = e.target.value;
        setInfoUser(Object.assign({}, infoUser));
    }

    return (
        <Row>
            <Col md={3} xs={2}></Col>
            <Col md={6} xs={8}>
                <Card className="mt-5">
                    <Card.Body>
                        <h3 className="text-center center">Log In</h3>
                    </Card.Body>
                </Card>
                <form onSubmit={onSubmit}>
                    <FormGroup>
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={onChange}
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Contraseña</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={onChange}
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" variant="primary">
                            Log In
                    </Button>
                    </FormGroup>
                    <p>¿No tienes cuenta?
                    <Link to="/register/">Registrarse</Link>
                    </p>
                </form>

            </Col>
        </Row>
    );
};

export default Login;