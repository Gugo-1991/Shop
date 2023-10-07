import { useReducer } from "react";
import CartContext from "./Cart-contest";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReduser = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      ({ id }) => id === action.item.id
    );
    let updateditems = [...state.items];

    if (existingItemIndex !== -1) {
      const existingItem = state.items[existingItemIndex];
      const updateditem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateditems[existingItemIndex] = updateditem;
    } else {
      updateditems.push(action.item);
    }

    return {
      totalAmount,
      items: updateditems,
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const existingItemIndex = state.items.findIndex(
      ({ id }) => id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const totalAmount = state.totalAmount - existingItem.price;
    let updateditems;
    if (existingItem.amount === -1) {
      updateditems = state.items.filter(({ id }) => id !== action.id);
    } else {
      const updateditem = { ...existingItem, amount: existingItem.amount - 1 };
      updateditems = [...state.items];
      updateditems[existingItemIndex] = updateditem;
    }

    return {
      totalAmount,
      items: updateditems,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReduser, defaultCartState);

  const addItemToCarthandler = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };
  const revoveItemFromCaart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: revoveItemFromCaart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
