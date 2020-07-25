import React from 'react';
import Card from 'react-bootstrap/Card';

const NoteDetail = (props) => {
    const nota = props.nota;
    return (
        <>
            <Card className='float-left m-2 box-shadow mt-4 '>
                <Card.Body>
                    <Card.Title>
                        {nota.titulo}
                    </Card.Title>
                    <Card.Text>
                        {nota.cuerpo}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default NoteDetail;