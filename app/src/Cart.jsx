import PropTypes from "prop-types";
function Cart({ onCartClick }) {
  return (
    <>
      <div onClick={onCartClick} className="blur"></div>
      <div className="cart">
        <span>Votre panier</span>
      </div>
    </>
  );
}
Cart.propTypes = {
  onCartClick: PropTypes.func.isRequired,
};
export default Cart;
