import React, { useState } from 'react';
import AddIcon from '../static-files/add.svg';
import Button from 'react-bootstrap/Button';

const CreateNote = () => {
    const [editando, setEditando] = useState(false);


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
                <div className="note-card">
                    <p>Hola</p>
                    <Button
                        className='float-left'
                        onClick={() => setEditando(true)}>
                        Crear Nota
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