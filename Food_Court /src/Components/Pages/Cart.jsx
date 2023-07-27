import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../redux/slices/cartSlice";
import FoodItemsInCart from "../restarunt cards/FoodItmes";

/* eslint-disable react/react-in-jsx-scope */
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  // Calculate the total price using the reduce function
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="h-full mt-5 py-5 d-flex flex-column align-items-center">
      {cartItems.map((item) => {
        return <FoodItemsInCart key={item.id} {...item} />;
      })}

      <p>to pay : &#x20B9;{totalPrice / 100}</p>
      <button className="btn btn-secondary" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
