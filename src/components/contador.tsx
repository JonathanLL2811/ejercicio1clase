
import React, { useState, useEffect } from 'react';

const Contador: React.FC = () => {
    const [texto, setTexto] = useState('');  
    const [contador, setContador] = useState (0); 
    const [colorTexto, setColorTexto] = useState('blue'); 

    useEffect(() => {
        setContador(texto.length); 

        if (texto.length === 0) {
            setColorTexto('blue'); 
        } else if (texto.length < 10) {
            setColorTexto('red');
        } else if (texto.length >= 10 && texto.length <= 20) {
            setColorTexto('orange');
        } else {
            setColorTexto('green');
        }
    }, [texto]);

    const manejarCambioTexto = (e: any) => {
        setTexto(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={texto}
                onChange={manejarCambioTexto}
                placeholder="Escribe algo..."
            />
            <p style={{ color: colorTexto }}>
                Contador de texto ingresados: {contador}
            </p>
        </div>
    );
};

export default Contador;


