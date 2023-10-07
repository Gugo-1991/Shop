import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [iscartshown, setIscartshown] = useState(false);

  const showcartHandler = () => {
    setIscartshown(true);
  };
  const hidecartShown = () => {
    setIscartshown(false);
  };
  return (
    <CartProvider>
      {iscartshown && <Cart onclose={hidecartShown} />}
      <Header onShowCart={showcartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
