/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../config";
import { FiChevronDown } from "react-icons/fi";
import { IoBicycleOutline, IoTimerOutline } from "react-icons/io5";
import { ShimmerTable } from "react-shimmer-effects-18";
import {
  useRestaruntInfo,
  useRestaruntDiscount,
  useGetRestaruntMenu,
} from "../utils/useRestaruntMenuData";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const RestaruntMenu = () => {
  // This is How to Read Dynamic URL Params
  const { restId } = useParams();

  const restaruntInfo = useRestaruntInfo(restId);
  const discountInfo = useRestaruntDiscount(restId);
  const restaruntMenu = useGetRestaruntMenu(restId);
  const menuList = useGetRestaruntMenu(restId);

  const [filteredMenu, setFilteredMenu] = useState([]); // "ALL", "VEG", or "NONVEG"

  // add items to cart

  const dispatch = useDispatch();

  const handleAddFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // Replace the handleVegItemMenu and handleNonVegItemMenu functions with a single function to filter menus
  const handleFilterMenu = (type) => {
    // Filter the menuList based on the selected type
    let filteredList;
    if (type === "VEG") {
      filteredList = menuList.filter((menu) => {
        return menu?.itemAttribute?.vegClassifier === "VEG";
      });
    } else if (type === "NONVEG") {
      filteredList = menuList.filter((menu) => {
        return menu?.itemAttribute?.vegClassifier === "NONVEG";
      });
    } else {
      // If type is "ALL", show all items
      filteredList = menuList;
    }

    setFilteredMenu(filteredList);
  };

  useEffect(() => {
    // Set the initial filtered menu to be all items on the first render
    if (menuList) {
      setFilteredMenu(menuList);
    }
  }, [menuList]);

  return !restaruntInfo || !restaruntMenu || !discountInfo ? (
    <ShimmerTable row={14} col={14} />
  ) : (
    <>
      {/* Restarunt Inforamtion */}
      <div className="d-flex flex-direction-column align-items-center my-5">
        <div
          id="restaruntInfo"
          className="d-flex justify-content-between py-3"
          style={{ borderBottom: "1px dashed" }}
        >
          <div id="restaruntInfoContent">
            <h5>{restaruntInfo?.name}</h5>
            <p
              className="text-secondary fw-light m-0"
              style={{ fontSize: "12px" }}
            >
              {restaruntInfo?.labels[2]?.message}
            </p>
            <p
              className="text-secondary fw-light fs-8 m-0"
              style={{ fontSize: "12px" }}
            >
              {restaruntInfo?.areaName},{" "}
              {restaruntInfo?.sla?.lastMileTravelString}
              <FiChevronDown className="mx-2 text-warning fw-bold" />
            </p>

            <p
              className="text-secondary my-2 fw-light"
              style={{ fontSize: "12px" }}
            >
              {<IoBicycleOutline />} {restaruntInfo?.feeDetails?.message}
            </p>
          </div>

          <div id="retaruntImage" className="w-50 d-flex justify-content-end">
            <img
              src={IMG_CDN_URL + restaruntInfo?.cloudinaryImageId}
              className="w-50"
            />
          </div>
        </div>

        <div id="time_money" className="d-flex">
          <p>
            <IoTimerOutline /> {restaruntInfo?.sla?.slaString} |
            {" " + restaruntInfo?.costForTwoMessage}
          </p>
        </div>
      </div>

      {/* Restarunt Discount Information */}
      <div className="d-flex flex-column flex-sm-column  flex-lg-row align-items-center justify-content-center mx-5">
        {discountInfo.map((discount) => {
          return (
            <div
              key={discount.offerIds}
              className="my-3 rounded mx-1 w-75"
              style={{}}
            >
              <div className="d-flex p-1 border justify-content-center align-items-baseline w-100">
                <img
                  src={IMG_CDN_URL + discount?.offerLogo}
                  style={{ width: "8%", height: "10%" }}
                ></img>
                <p className="d-flex flex-column align-items-center">
                  {discount.header}
                  <span className="text-secondary" style={{ fontSize: "11px" }}>
                    {discount?.couponCode} | {discount?.description}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="btn-group mx-5"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleFilterMenu("VEG")}
        >
          Veg
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleFilterMenu("NONVEG")}
        >
          Non-Veg
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleFilterMenu("ALL")}
        >
          All
        </button>
      </div>

      {/* Restarunt Menu list and information  */}
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          {filteredMenu.map((menu, index) => {
            return (
              <div
                className="d-flex justify-content-between p-2 my-3 border rounded w-75"
                id="menuList"
                key={index}
              >
                <div
                  className="d-flex flex-column justify-content-center"
                  id="menu-content"
                >
                  <h5>{menu?.name}</h5>
                  <p>₹{String(menu?.price).slice(0, 3)}</p>
                  <p className="text-secondary" style={{ fontSize: "12px" }}>
                    {menu?.description}
                  </p>

                  <div id="button-container">
                    <button
                      className="btn btn-secondary  "
                      onClick={() => handleAddFoodItem(menu)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-25" id="menuImg">
                  <img src={IMG_CDN_URL + menu?.imageId} className="w-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaruntMenu;
