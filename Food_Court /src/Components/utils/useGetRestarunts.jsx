import { useState, useEffect } from "react";
import { FETCH_RESTARUNTS } from "../../config";
import axios from "axios";

// Getting Restarunts from Api
export const useGetRestarunts = () => {
  const [allRestarants, setAllRestarants] = useState([]);
  const [filteredRestarunts, setFilteredRestarunts] = useState([]);
  console.log(allRestarants);

  useEffect(() => {
    getRestarunts();
  }, []);

  const getRestarunts = async () => {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setAllRestarants(
      data?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestarunts(
      data?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return [
    allRestarants,
    filteredRestarunts,
    setFilteredRestarunts,
    setAllRestarants,
  ];
};
