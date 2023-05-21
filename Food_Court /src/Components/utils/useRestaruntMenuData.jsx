import { useState, useEffect } from "react";
import { FETCH_RESTARUNTS_DETAILS } from "../../config";
import axios from "axios";

// Restarunt information
export const useRestaruntInfo = (restId) => {
  const [restaruntInfo, setRestaruntInfo] = useState(null);

  useEffect(() => {
    getRestaruntInfo();
  }, []);

  const getRestaruntInfo = async () => {
    const restData = await axios.get(FETCH_RESTARUNTS_DETAILS + restId);
    setRestaruntInfo(restData?.data?.data?.cards[0]?.card?.card?.info);
  };
  return restaruntInfo;
};

// Restarunt discount
export const useRestaruntDiscount = (restId) => {
  const [discountInfo, setDiscountInfo] = useState(null);

  useEffect(() => {
    getDiscountInfo();
  }, []);

  const getDiscountInfo = async () => {
    const discountInformation = await axios.get(
      FETCH_RESTARUNTS_DETAILS + restId
    );
    setDiscountInfo(
      discountInformation?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
        (offer) => offer.info
      )
    );
    console.log(discountInfo);
  };
  return discountInfo;
};

// Restarunt Menu List
export const useGetRestaruntMenu = (restId) => {
  const [restaruntMenu, setRestaruntMenu] = useState(null);

  useEffect(() => {
    getRestaruntMenu();
  }, []);

  const getRestaruntMenu = async () => {
    const restCards = await axios.get(FETCH_RESTARUNTS_DETAILS + restId);
    console.log(restCards);

    const restMenuCards =
      restCards?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (card) => {
          return card?.card?.card?.itemCards;
        }
      );
    console.log(restMenuCards);

    const menuCardsList = restMenuCards
      .filter(Boolean)
      .flatMap((innerMenuCard) =>
        innerMenuCard.map((objList) => {
          const menuList = objList?.card?.info;
          return menuList;
        })
      );

    setRestaruntMenu(menuCardsList);
    console.log(restaruntMenu);
  };
  return restaruntMenu;
};
