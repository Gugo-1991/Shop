import { createContext, useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-contest";

const Cart = ({ onclose }) => {
  const cartctx = useContext(CartContext);

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const hasItem = cartctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  const cartItemAddhandler = (item) => {
    cartctx.addItem(item);
  };
  const cartItems = (
    <ul className="cart-items">
      {cartctx.items.map((meal) => {
        return (
          <CartItem
            onAdd={cartItemAddhandler.bind(null, meal)}
            onRemove={cartItemRemoveHandler.bind(null, meal.id)}
            {...meal}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onclose={onclose}>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span> {totalAmount}</span>
      </div>
      <div className="actions">
        <button onClick={onclose} className="button--alt">
          Close
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
