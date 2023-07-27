/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

import { IMG_CDN_URL } from "../../config";

const FoodItemsInCart = ({ name, description, imageId, price }) => {
  const dishPrice = (price / 100).toFixed(2);
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={IMG_CDN_URL + imageId}
              className="img-fluid rounded-start"
              alt="Food IMG"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">&#x20B9;{dishPrice}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItemsInCart;
