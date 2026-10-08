import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export const Nav = () => {

    const { getTotalItems } = useCart();

  return (
    <nav>   
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">
                    Carrito ({getTotalItems()})
                </Link>
            </li>
        </ul>
    </nav>
  );
}



