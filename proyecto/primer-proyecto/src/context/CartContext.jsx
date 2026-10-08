import {createContext, useContext}from "react";

/* creamos el contexto */
export const CartContext = createContext();

/*custom hook para usar el contexto */

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
};


/* proveedor */

export const CartProvider = ({children}) => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const isInCart =() => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    const addItem = (item)=> {
        if (isInCart(item)){
            alert ("El producto ya se encuentra en el carrito");
            return;
        }

        //forma funcional prev
        //setCart (prev => [...prev, item]);

    setCart ([...cart, item]);
    alert ("Producto agregado al carrito");
    };
//eliminar del carrito 
const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    alert("Producto eliminado del carrito");

//forma funcional prev
//setCart(prev => prev.filter((item) => item.id !== id));
};

//vaciar el carrito
const clearCart = ()=>{
    setCart([]);

};

//total de items en carrito (para este caso sin quantity)
const getTotalItems =()=>{
    return cart.lenght;
};


//total a pagar 
const getCartTotal = ()=>{
    return cart.reduce ((acc, alement)=>acc + element.price, 0);
};

//checkout
const checkout = ()=>{
    alert ("su compra ha sido realizada");
    clearCart();
    navigate("/");
};


const values ={
    cart, addItem, clearCart, removeItem, getCartTotal, getTotalItems, checkout,
};



return <CartContext.Provider value={values}>{children} </CartContext.Provider>;
};


//esto lo tengo que import en ItemDetail
//nav tambien import








