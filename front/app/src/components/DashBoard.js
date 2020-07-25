import React, { useState, useEffect } from 'react';
import CreateNote from './CreateNote';
import NoteDetail from './NoteDetail';
import './styles.css';
import Row from 'react-bootstrap/Row';

const DashBoard = () => {

    const [notas, setNotas] = useState([]);

    useEffect(() => {
        async function notasBack() {
            let notasBack = await( await (await fetch("/recordatorios/")).json())
            setNotas(notasBack);
            console.log(notasBack);
        }
        notasBack();

    }, [])

    return (
        <div>
            <CreateNote notas={[notas, setNotas]}></CreateNote>
            {notas[0] && notas.map((nota, index) => {
               return <NoteDetail nota= {nota} key={ index}></NoteDetail>
                
            })}

        </div>
    );
};

export default DashBoard;