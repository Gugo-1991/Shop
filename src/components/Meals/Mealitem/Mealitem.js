import { useContext } from "react";
import "./MealItem.css";
import MealItemForm from "./Mealitemform";
import cartContext from "../../../Store/Cart-contest";

const MealItem = ({ name, discription, price, id }) => {
  const cartctx = useContext(cartContext);

  const fixedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="discription"> {discription}</div>
        <div className="price"> {price}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
