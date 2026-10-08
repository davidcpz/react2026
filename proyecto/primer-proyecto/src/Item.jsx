
//voy a destructurar la props que viene de componentecontenedor.jsx
export const Item = ({ nombre, apellido }) => {
    return ( 
        <>
            <p>{nombre}</p>
            <p>{apellido}</p>
    
        </>
      );  
    };
