import { useEffect, useState } from "react";

export const ContadorAutomatico = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("componente montado");

        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("cleanup limpiamos el intervalo");
            clearInterval(interval);
        };
    }, []);

    return (
        <>
        <div>
            <p>Contador: {count}</p>
        </div>
        </>
    );
}