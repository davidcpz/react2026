import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Creamos el contexto */
export const CartContext = createContext();

/* Custom hook para usar el contexto */
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }

    return context;
};

/* Proveedor */
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    // Verificar si el producto ya está en el carrito
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    // Agregar al carrito
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya se encuentra en el carrito");
            return;
        }

        // Forma funcional:
        // setCart(prev => [...prev, item]);

        setCart([...cart, item]);
        alert("Producto agregado al carrito");
    };

    // Eliminar del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");

        // Forma funcional:
        // setCart(prev => prev.filter((item) => item.id !== id));
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Total de items en carrito
    const getTotalItems = () => {
        return cart.length;
    };

    // Total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    // Checkout
    const checkout = () => {
        alert("Su compra ha sido realizada");
        clearCart();
        navigate("/");
    };

    const values = {
        cart,
        addItem,
        clearCart,
        removeItem,
        getCartTotal,
        getTotalItems,
        checkout,
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};