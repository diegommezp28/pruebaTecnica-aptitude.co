import React, { useState } from 'react';
import { Col, Row, Card, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    let [infoUser, setInfoUser] = useState({ username: "", email: "", password: "", passwordConf: "" });

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
            <Col md={6} xs="auto">
                <Card className="mt-5">
                    <Card.Body>
                        <h3 className="text-center center">Registro</h3>
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
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
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
                        <label>Confirmar Contraseña</label>
                        <input
                            type="text"
                            className="form-control"
                            name="passwordConf"
                            onChange={onChange}
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" variant="primary">
                            Registrarse
                    </Button>
                    </FormGroup>
                    <p>¿Ya tienes cuenta?
                    <Link to="/login/">LogIn</Link>
                    </p>
                </form>

            </Col>
        </Row>
    );
};

export default SignUp;