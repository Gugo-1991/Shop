import { useContext } from "react";
import "./CartButton.css";
import cartContext from "../../../Store/Cart-contest";

function CartButton({ onShowCart }) {
  const cartctx = useContext(cartContext);
  const cartItemCount = cartctx.items?.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <button onClick={onShowCart} className="cart-button">
      <span className="cart-button-icon"></span>
      <span>Your Cart</span>
      <span className="cart-button-icon">{cartItemCount}</span>
    </button>
  );
}
export default CartButton;
