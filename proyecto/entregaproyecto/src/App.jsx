import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";



function App() {
  return (
    <>
    <CartProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element ={<h1>carrito</h1>}/>
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer/>  
    </CartProvider>
    
    </>
  );
}
export default App;




