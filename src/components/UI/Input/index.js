import { forwardRef } from "react";
import "./index.css";
const Input = forwardRef(function ({ label, input }, ref) {
  return (
    <div className="input">
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});
export default Input;
