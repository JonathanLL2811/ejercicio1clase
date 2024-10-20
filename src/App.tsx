// src/App.jsx

import Contador from './components/contador'; // Importa el nuevo componente

const App = () => {
    return (
        <div>
            <h1>Contador de texto mas un evento que me cambia de color segun el texto ingresado</h1>
            <Contador /> {/* Añade el contador */}
        </div>
    );
};

export default App;

