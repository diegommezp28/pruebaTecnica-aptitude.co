import React, { useState, useEffect } from 'react';
import CreateNote from './CreateNote';
import NoteDetail from './NoteDetail';
import {useHistory } from 'react-router-dom';
import './styles.css';
import Row from 'react-bootstrap/Row';

const DashBoard = (props) => {

    const [notas, setNotas] = useState([]);
    const [state, setState] = props.state;
    let history = useHistory();

    async function logOut() {
        await fetch("/api/auth/logout",
        {
            body: JSON.stringify({}),
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + state.token
            }
        })
        .then(response => {
            state.isAuth = false;
            state.token = null;
            state.user = null;
            localStorage.setItem("key", "undefined");
            setState(Object.assign({}, state));
            history.push("/");
        })
    }

    useEffect(() => {
        async function notasBack() {
            let notasBack = await (await
                (await fetch("/recordatorios/",
                    {
                        headers:
                            { "Authorization": "Token " + localStorage.getItem("token") }
                    }))
                    .json())
            setNotas(notasBack);
            console.log(notasBack);
        }
        notasBack();

    }, [])

    return (
        <div>
            <button onClick={logOut} className="float-right mr-2 mt-2">
                LogOut
            </button>
            <CreateNote notas={[notas, setNotas]}
                state={[state, setState]}
            />
            {notas[0] && notas.map((nota, index) => {
                return <NoteDetail nota={nota} key={index}></NoteDetail>

            })}

        </div>
    );
};

export default DashBoard;