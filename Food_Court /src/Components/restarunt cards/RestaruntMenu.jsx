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
  const [restaruntMenu, setRestaruntMenu] = useState({});
  const [discountInfo, setDiscountInfo] = useState({});

  console.log(restaruntInfo);
  useEffect(() => {
    getRestaruntInfo();
  }, []);

  useEffect(() => {
    getRestaruntMenu();
  }, []);

  useEffect(() => {
    getDiscountInfo();
  }, []);

  const getRestaruntInfo = async () => {
    const restData = await axios.get(FETCH_RESTARUNTS_DETAILS);
    console.log(restData);
    setRestaruntInfo(restData?.data?.data?.cards[0]?.card?.card?.info);
    console.log(restaruntInfo);
  };

  const getDiscountInfo = async () => {
    const discountInfo = await axios.get(FETCH_RESTARUNTS_DETAILS);
    setDiscountInfo(
      discountInfo?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
        (offer) => offer.info
      )
    );
  };

  console.log(discountInfo);

  const getRestaruntMenu = async () => {
    const restCards = await axios.get(FETCH_RESTARUNTS_DETAILS);
    console.log(restCards);

    const restMenuCards =
      restCards?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.map(
        (card) => {
          return card.card.card.itemCards;
        }
      );
    console.log(restMenuCards);

    const menuCardsList = restMenuCards
      .filter(Boolean)
      .flatMap((innerMenuCard) =>
        innerMenuCard.map((objList) => objList.card.info)
      );
    console.log(menuCardsList);

    // setRestaruntMenu(menuCardsList);
    const menuLists = menuCardsList.map((menuCardsList) => {
      console.log(menuCardsList);
      return menuCardsList;
    });
    console.log(menuLists);
    console.log(restaruntMenu);

    setRestaruntMenu(menuLists);
    console.log(restaruntMenu);

    // const restMenuCard = restMenuListCards.map((cards) => {
    //   return cards;
    // });
    // console.log(restMenuCard);

    // const menuCard = restMenuCard.map((card) => {
    //   return card;
    // });
    // // setRestaruntMenu(...menuCard);
    // // console.log(...menuCard);
    // // console.log(restaruntMenu);

    // const menuInfo = menuCard.map((menu) => {
    //   return setRestaruntMenu(menu);
    // });

    // console.log(menuInfo);
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

      <div className="d-flex justify-content-center mx-5">
        {discountInfo.map((discount) => {
          return (
            <div
              key={discount.offerIds}
              className="m-3 rounded"
              style={{ width: "17%" }}
            >
              <div className="d-flex p-1 border justify-content-center align-items-baseline">
                <img
                  src={IMG_CDN_URL + discount.offerLogo}
                  style={{ width: "8%", height: "10%" }}
                ></img>
                <p className="d-flex flex-column align-items-center">
                  {discount.header}
                  <span className="text-secondary" style={{ fontSize: "11px" }}>
                    {discount.couponCode} | {discount.description}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <h3>hii </h3>
        </div>
      </div>
    </>
  );
};

export default RestaruntMenu;
