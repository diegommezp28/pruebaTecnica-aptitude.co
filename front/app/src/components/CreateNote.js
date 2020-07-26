import React, { useState } from 'react';
import AddIcon from '../static-files/add.svg';
import Button from 'react-bootstrap/Button';

const CreateNote = (props) => {
    const [notas, setNotas] = props.notas;
    const [state, setState] = props.state;
    // console.log('====================================');
    // console.log(state);
    // console.log('====================================');

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
                <button
                    className='float-left mg-20 button-note'
                    onClick={() => setEditando(true)}>
                    <img className='addIcon' src={AddIcon} alt=""></img>
                </button>
            )
        }
    }

    function body() {
        if (editando) {
            return (
                <div className="note-card float-left">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitInfo();
                            setEditando(false);
                        }}
                    >
                        <input type='text' placeholder='título' maxLength="35" required
                            onChange={(e) => {
                                const titulo = e.target.value;
                                nota.titulo = titulo;
                                setNota(Object.assign({}, nota));
                            }}
                        />
                        <input type='date' placeholder='vencimiento' required
                            onChange={(e) => {
                                const vencimiento = e.target.value;
                                nota.vencimiento = vencimiento;
                                setNota(Object.assign({}, nota));
                            }}
                        />
                        <input type='text' placeholder='nota' required
                            onChange={(e) => {
                                const cuerpo = e.target.value;
                                nota.cuerpo = cuerpo;
                                setNota(Object.assign({}, nota));
                            }}
                        />
                        <Button
                            className='float-left'
                            type='submit'
                        >
                            Crear Nota
                    </Button>
                    </form>
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