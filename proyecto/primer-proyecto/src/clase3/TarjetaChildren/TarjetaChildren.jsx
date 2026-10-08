import "./TarjetaChildren.css";


{/*con el ¿children? podemos pasarle contenido al componente desde el componente padre, en este caso App.jsx 
    siempre tiene que llevar para poder agregar cosas que se nos ocurran*/  }
export const TarjetaChildren =({imagen, titulo, precio, children})=>{
    return (
        <article className="tarjeta">
            <img src= {imagen} alt = {titulo} className = "tarjeta-img"/>   

            <div className = "tarjeta-info">
                <h2>{titulo}</h2>
                <p className = "tarjeta-precio">${precio}</p>

                <div className = "tarjeta-extra">{children}</div>
            </div>
        </article>
    );
};







