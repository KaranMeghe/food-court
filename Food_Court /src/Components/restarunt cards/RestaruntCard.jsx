/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import { BsFillStarFill } from "react-icons/bs";
import { IMG_CDN_URL } from "../../config";
const RestaruntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h3>{name}</h3>
        <p className="card-text text-secondary">{cuisines.join(" , ")}</p>

        <div
          className="d-flex justify-content-between"
          style={{ fontSize: "12px", height: "20%" }}
        >
          {avgRating >= 4 ? (
            <div
              className="d-flex justify-content-center align-items-baseline bg-success text-white  p-2"
              style={{}}
            >
              <BsFillStarFill />
              <p>{avgRating}</p>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-baseline bg-warning text-white  p-2">
              <BsFillStarFill />
              <p>{avgRating}</p>
            </div>
          )}

          <p>{slaString} .</p>
          <p>{costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaruntCard;
