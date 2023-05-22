import { useState, useEffect } from "react";
import { FETCH_RESTARUNTS } from "../../config";
import axios from "axios";

// Getting Restarunts from Api
export const useGetRestarunts = () => {
  const [allRestarants, setAllRestarants] = useState([]);

  useEffect(() => {
    getRestarunts();
  }, []);

  const getRestarunts = async () => {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setAllRestarants(data?.data?.data?.cards[2]?.data?.data?.cards);
  };
  return allRestarants;
};

// Getting Filtered Restarunt
export const useGetFilteredRestarunt = () => {
  const [filteredRestarunts, setFilteredRestarunts] = useState([]);

  useEffect(() => {
    getFilteredRestarunts();
  }, []);

  async function getFilteredRestarunts() {
    const data = await axios.get(FETCH_RESTARUNTS);
    console.log(data);
    setFilteredRestarunts(data?.data?.data?.cards[2]?.data?.data?.cards);
  }
  return [filteredRestarunts, setFilteredRestarunts]; // Return array instead of variable and in array there will be value and function
};