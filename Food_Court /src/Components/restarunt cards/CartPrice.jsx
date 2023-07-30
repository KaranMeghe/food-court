/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useDispatch } from "react-redux";
import { clearItem } from "../../redux/slices/cartSlice";
const CartPrice = ({ totalPrice }) => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="border border-1 py-5 px-5">
        <p>to pay : &#x20B9;{totalPrice / 100}</p>
        <button
          className="btn btn-danger py-2"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPrice;
