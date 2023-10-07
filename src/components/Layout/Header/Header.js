import CartButton from "./CartButton";
import "./Header.css";
import meals from "./media/meals_720.jpg";
function Header({ onShowCart }) {
  return (
    <>
      <header className="header">
        <h1>My shop</h1>
        <CartButton onShowCart={onShowCart} />
      </header>
      <div className="main-image img">
        <img src={meals} alt="meals" />
      </div>
    </>
  );
}
export default Header;
