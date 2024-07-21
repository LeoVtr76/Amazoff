import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./CartContext";
function Cart({ onCartClick }) {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);
  return (
    <>
      <div onClick={onCartClick} className="blur"></div>
      <div className="cart">
        <span>Votre panier</span>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <>
                <div className="separator"></div>
                <li key={index}>
                  <div className="cart-item">
                    <div className="cart-item-desc">
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="cart-item-data">
                        <span>{item.title}</span>
                        <span>{item.price} $</span>
                        <div className="cart-item-data-quantity">
                          <button
                            onClick={() =>
                              updateCartQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateCartQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-remove">
                      <button onClick={() => removeFromCart(item.id)}>x</button>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <span>
            Total :{" "}
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}{" "}
            ${" "}
          </span>
        </div>
      </div>
    </>
  );
}
Cart.propTypes = {
  onCartClick: PropTypes.func.isRequired,
};
export default Cart;
