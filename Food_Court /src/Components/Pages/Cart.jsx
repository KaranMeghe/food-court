import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../redux/slices/cartSlice";
import FoodItemsInCart from "../restarunt cards/FoodItmes";

/* eslint-disable react/react-in-jsx-scope */
const Cart = () => {
  const cartItmes = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="h-full mt-5 py-5 d-flex flex-column align-items-center">
      {cartItmes.map((item) => {
        return <FoodItemsInCart key={item.id} {...item} />;
      })}

      <p>
        to pay :{" "}
        {cartItmes.map((item) => {
          return item.price;
        })}
      </p>
      <button className="btn btn-secondary" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
