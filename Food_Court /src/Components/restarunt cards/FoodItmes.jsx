/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { IMG_CDN_URL } from "../../config";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";
const FoodItemsInCart = ({ name, description, imageId, price, id }) => {
  const dishPrice = price / 100;

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    // dispatch an action
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 col-sm-8">
            <img
              src={IMG_CDN_URL + imageId}
              className="img-fluid rounded-start"
              alt="Food IMG"
            />
          </div>
          <div className="col-md-8 d-flex">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>

              <p className="card-text">
                <big className="text-muted">&#x20B9;{dishPrice}</big>
              </p>
            </div>

            <button className="btn btn-secondary" onClick={handleRemoveItem}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemsInCart;
