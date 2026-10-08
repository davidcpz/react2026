import {useState} from "react";
import ".Count.css";



export const Count = ({ count }) => {
    const [count, setCount] = useState(0);
    const [mostrar, setMostrar] = useState(true);

const increment = () => {
    setCount(count + 1);
};

const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
    }
};


    return (
        <div className= "clase4">
            <div className="count-container">
                <h3> Contador </h3>
                <button className="btn primary" 
                        onClick= {decrement} 
                        disabled={count === 0}>
                    -
                </button>
                <p> Valor : {count} </p>
                <button className="btn primary" onClick={increment}>
                    +
                </button>
            </div>

            <div className="mostrar-ocultar">
                <h3> Estado para mostrar u ocultar</h3>
                <button onClick={() => setMostrar(!mostrar)}>
                    {mostrar ? 'Esconder' : 'Mostrar'}
                </button>
                {mostrar && <p>Este contenido está oculto</p>}
            </div>
        </div>
    );
};

//esto lo tengo que pasar al componente contenedor para poder usarlo en el app.jsx


