import React from "react";
const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeitem: (item) => {},
});

export default cartContext;
