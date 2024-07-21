import logo from "/logo-white.png";
import cartIcon from "/cart.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "./CartContext";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const handleCartClick = () => {
    setCartOpen(!cartOpen);
    if (cartOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logo} className="logo" alt="amazoff logo" />
        </Link>
        <button onClick={handleCartClick}>
          <img src={cartIcon} alt="cart icon" />
          <span>
            {cart.reduce((total, item) => total + item.quantity, 0).toFixed(0)}
          </span>
        </button>
      </header>
      {cartOpen && <Cart onCartClick={handleCartClick} />}
    </>
  );
}
export default Header;
