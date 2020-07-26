import React, { useState } from 'react';
import { Col, Row, Card, FormGroup, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const Login = (props) => {

    let [infoUser, setInfoUser] = useState({ username: "", password: "" });
    const [state, setState] = props.state;
    let history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        console.log('submit');
        fetch("/api/auth/login",
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
                    <Link to="/register/"> Registrarse</Link>
                    </p>
                </form>

            </Col>
        </Row>
    );
};

export default Login;