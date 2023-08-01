import { useSelector } from "react-redux";
import CartPrice from "../restarunt cards/CartPrice";
import FoodItemsInCart from "../restarunt cards/FoodItmes";

/* eslint-disable react/react-in-jsx-scope */
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate the total price using the reduce function
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="d-flex flex-column flex-md-row justify-content-around vh-100 align-items-center my-5 py-5">
      <div className="mt-5 mx-5 py-5 d-flex flex-column align-items-center">
        {cartItems.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cartItems.map((item) => {
            return (
              <FoodItemsInCart
                key={item.id}
                {...item}
                totalPrice={totalPrice}
              />
            );
          })
        )}
      </div>

      <CartPrice totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
