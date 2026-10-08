import {useEffect, useState} from "react";

export const ComponenteConEfecto = () => {
  const [contador, setContador] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  useEffect(() => {
    document.title = "titulo desde el useEffect";
  }, []);

  useEffect(() => {
    console.log("componente montado");
  }, [contador]);

  //cuidado sin control y actualizando el estado dentro, pordemos entrar en loop infinito
  //useEffect(() => {
  //  setContador(contador + 1);
  //}), sin array de dependencias, el useEffect se dispara en cada render

  //otro ejempplo de loop:
  //useEffect(() => {
  //  setContador(contador + 1);
  //}, [contador]); //el array tiene variable de dependencias al mismo estado que actualiza desntro del useEffect


    return (
        <>
        <button onClick={() => setContador(contador + 1)}> sumar</button>
        <p>{contador}</p>
        <br />
        <br />

        <button onClick={() => setMostrarMensaje(!mostrarMensaje)}>
            {mostrarMensaje ? "Ocultar mensaje" : "Mostrar mensaje"}
        </button>
        {mostrarMensaje && <p>texto visible</p>}
        </>
    );
}







