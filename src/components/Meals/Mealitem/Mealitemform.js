import "./MealItemForm.css";
import Input from "../../UI/Input/index";
import { useRef, useState } from "react";

const MealItemForm = ({ id, addToCart }) => {
  const inputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);
  const handlSubmit = (e) => {
    e.preventDefault();
    const value = +inputRef.current.value;
    if (value < 1 || value > 5) {
      return setIsAmountValid(false);
    }
    addToCart(value);
  };
  return (
    <form className="form" onSubmit={handlSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          min: 1,
          max: 5,
          step: 1,
          id: " amount_" + id,
          type: "number",
          defaultValue: 0,
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Pleace enter a valid (1-5).</p>}
    </form>
  );
};
export default MealItemForm;
