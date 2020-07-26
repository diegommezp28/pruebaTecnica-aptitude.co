import React, { useState } from 'react';
import AddIcon from '../static-files/add.svg';
import { Button, Form } from 'react-bootstrap/';

const CreateNote = (props) => {
    const [notas, setNotas] = props.notas;
    const [state, setState] = props.state;

    const [editando, setEditando] = useState(false);
    let [nota, setNota] = useState({ titulo: "", cuerpo: "", vencimiento: null });



    async function notasBack() {
        let notasBack = await (await (await fetch("/recordatorios/", {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + state.token
            }
        })).json())
        setNotas(notasBack);
        console.log('notasBack');
        console.log(notasBack);
    }

    function submitInfo() {
        fetch("/recordatorios/",
            {
                body: JSON.stringify(nota),
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "Token " + state.token
                }
            })
            .then(response => response.json())
            .then(response => {
                notasBack()
            })
    }

    function icon() {
        if (!editando) {
            return (
                <div className='addIcon-wrapper float-left mg-20 mt-3'>
                    <button
                        className='button-note mg-20'
                        onClick={() => setEditando(true)}>
                        <img className='addIcon' src={AddIcon} alt=""></img>
                    </button>
                </div>
            )
        }
    }

    function body() {
        if (editando) {
            return (
                <div className="note-card float-left">
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitInfo();
                            setEditando(false);
                        }}
                    >
                        <Form.Group>
                            <Form.Control type='text' placeholder='Título' maxLength="35" required
                                onChange={(e) => {
                                    const titulo = e.target.value;
                                    nota.titulo = titulo;
                                    setNota(Object.assign({}, nota));
                                }}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Vencimiento </Form.Label>
                            <Form.Control type='date' placeholder='vencimiento' required
                                onChange={(e) => {
                                    const vencimiento = e.target.value;
                                    nota.vencimiento = vencimiento;
                                    setNota(Object.assign({}, nota));
                                }}
                            />

                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder='Recordatorio' required
                                onChange={(e) => {
                                    const cuerpo = e.target.value;
                                    nota.cuerpo = cuerpo;
                                    setNota(Object.assign({}, nota));
                                }}
                            />
                        </Form.Group>
                        <Button
                            className='float-left'
                            type='submit'
                        >
                            Crear Nota
                    </Button>
                    </Form>
                    <Button
                        className='float-right'
                        variant="danger"
                        onClick={() => setEditando(false)}
                    >
                        Cancelar
                    </Button>
                </div>
            )
        }
    }

    return (
        <div>
            {icon()}
            {body()}
        </div>
    );
};

export default CreateNote;