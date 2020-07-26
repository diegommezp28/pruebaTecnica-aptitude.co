import React, { useState } from 'react';
import { Col, Row, Card, Form, FormGroup, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SignUp = (props) => {
    let [infoUser, setInfoUser] = useState({ username: "", email: "", password: "", passwordConf: "" });
    const [state, setState] = props.state;
    let history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        console.log('submit');
        fetch("/api/auth/register",
            {
                body: JSON.stringify(infoUser),
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            .then(response => response.json())
            .then(response => {
                localStorage.setItem("token", response.token);
                state.token = localStorage.getItem("token");
                state.user = response.user;
                state.isAuth = true;
                setState(Object.assign({}, state));
                history.push("/");
            })

    }

    function onChange(e) {
        infoUser[e.target.name] = e.target.value;
        setInfoUser(Object.assign({}, infoUser));
    }

    return (
        <Row>
            <Col md={3} xs={2}></Col>
            <Col md={6} xs={8}>
                <Card className="mt-5 pt-3 mb-2">
                    <Card.Title>
                        <h3 className="text-center center">Registro</h3>
                    </Card.Title>
                </Card>
                <form onSubmit={onSubmit}>
                    <FormGroup>
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={onChange}
                            required
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Email</label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            name="email"
                            onChange={onChange}
                            required />
                    </FormGroup>
                    <FormGroup>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={onChange}
                            required
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <label>Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="passwordConf"
                            onChange={onChange}
                            required
                        ></input>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" variant="primary">
                            Registrarse
                    </Button>
                    </FormGroup>
                    <p>¿Ya tienes cuenta?
                    <Link to="/login/"> LogIn</Link>
                    </p>
                </form>

            </Col>
        </Row>
    );
};

export default SignUp;