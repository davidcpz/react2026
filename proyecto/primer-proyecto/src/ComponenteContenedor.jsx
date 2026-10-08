
import { Item } from "./Item";

export const ComponenteContenedor = () => {
    //provisoriamente tenemos un objeto 
    const persona = { nombre:"cosme", apellido:"fulanito"}
    return (
        <section>
{/* le voy a pasar el obajeto perosna a Item como props */}
            <Item nombre={persona.nombre} apellido={persona.apellido} />
        </section>
    )    
};
