
import './App.css'
import { Bienvenida } from './Bienvenida'
import { TarjetaChildren } from './clase3/TarjetaChildren/TarjetaChildren'
import { ContadorAutomatico } from './clase5/ContadorAutomatico'
import { ComponenteContenedor } from './ComponenteContenedor'



function App() {
  return (
    <>
     <Bienvenida />
     {/*tengo que importar el componente contenedor para poder usarlo*/}
     <ComponenteContenedor />


      {/*le paso las props al componente tarjeta children*/}
    <TarjetaChildren imagen="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo={"campera"} precio={10000}
    />
    

    <TarjetaChildren imagen="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    titulo={"campera"} 
    precio={10000}
    >
      <p>esta campera es buena</p>
      <button>comprar</button>
    </TarjetaChildren>


    <TarjetaChildren imagen="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    titulo={"campera"} 
    precio={10000}
    >
      <p>esta campera es buena</p>
      <button>eliminar</button>
    </TarjetaChildren>



    {/*clase 5*/}
    
    <ComponenteConEfecto />
    <button onClick={() => setContando(!contando)}>
      {contando
      ? "Detener"
      : "Iniciar"}
    </button>
    {contando ? (
      <ContadorAutomatico />
    ) : (
      <p>contador detenido</p>
    )}

    <ContadorAutomatico />

    {/*clase 7*/}
    <FormContainer />

    </>
  )
}

export default App;
