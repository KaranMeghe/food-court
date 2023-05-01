/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FETCH_RESTARUNTS_DETAILS, IMG_CDN_URL } from "../../config";
import { FiChevronDown } from "react-icons/fi";
import { IoBicycleOutline, IoTimerOutline } from "react-icons/io5";

const RestaruntMenu = () => {
  // This is How to Read Dynamic URL Params
  const { restId } = useParams();

  const [restaruntInfo, setRestaruntInfo] = useState({});

  useEffect(() => {
    getRestaruntInfo();
  }, []);

  const getRestaruntInfo = async () => {
    const restData = await axios.get(FETCH_RESTARUNTS_DETAILS);
    console.log(restData);
    setRestaruntInfo(restData.data.data.cards[0].card.card.info);
    console.log(restaruntInfo);
  };

  return (
    <>
      <div className="d-flex flex-direction-column align-items-center">
        <div
          id="restaruntInfo"
          className="d-flex justify-content-between py-3"
          style={{ borderBottom: "1px dashed" }}
        >
          <div id="restaruntInfoContent">
            <h5>{restaruntInfo.name}</h5>
            <p
              className="text-secondary fw-light m-0"
              style={{ fontSize: "12px" }}
            >
              {restaruntInfo.labels[2].message}
            </p>
            <p
              className="text-secondary fw-light fs-8 m-0"
              style={{ fontSize: "12px" }}
            >
              {restaruntInfo.areaName}, {restaruntInfo.sla.lastMileTravelString}
              <FiChevronDown className="mx-2 text-warning fw-bold" />
            </p>

            <p
              className="text-secondary my-2 fw-light"
              style={{ fontSize: "12px" }}
            >
              {<IoBicycleOutline />} {restaruntInfo.feeDetails.message}
            </p>
          </div>

          <div id="retaruntImage" className="w-50 d-flex justify-content-end">
            <img
              src={IMG_CDN_URL + restaruntInfo.cloudinaryImageId}
              className="w-50"
            />
          </div>
        </div>

        <div id="time_money" className="d-flex">
          <p>
            <IoTimerOutline /> {restaruntInfo.sla.slaString} |
            {" " + restaruntInfo.costForTwoMessage}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        {restaruntInfo.aggregatedDiscountInfo.descriptionList.map((item) => {
          return (
            <div key={Math.floor(Math.random() * 1000)} className="w-20 mx-2">
              <p className="p-1 border">{item.meta}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaruntMenu;
