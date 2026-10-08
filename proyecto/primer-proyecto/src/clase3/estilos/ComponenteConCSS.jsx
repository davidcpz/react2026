import styles from './ComponenteConCSS.module.css';


//estilos que a conocen: aunque sea un archio por componente, sigan siendo globales.
//la clave : si utilizan correctamnete la especificidad, pueden evitar los conflictos.

import "./ComponenteConCSS.css";

export const ComponenteConCSS = () => {
    return (
        <>
        <p className={styles.miParrafo}>hola mundo desde componente con css module</p>

        <p className={`${styles.fondo} ${styles["otroparrafo"]}`}>
            hola mundo module y clase kebab case</p>
        
        <div className = {styles.fondo}>
            <p>este es un div con fondo azul</p>

        </div>
        
        {/*una clase con estilo sin module.*/}

        <p className="miParrafo"> Hola mundo con css global (css de componenete.)
            </p>       
        
        </>
    );
};














