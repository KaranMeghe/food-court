import { useState, useEffect } from "react";
import { FETCH_LEGAL } from "../../config";
import axios from "axios";

const useGetLegal = () => {
  const [legal, setLegal] = useState([]);

  useEffect(() => {
    getLegal();
  }, []);

  const getLegal = async () => {
    const data = await axios.get(FETCH_LEGAL);
    console.log(data);
    setLegal(data?.data?.data?.issues?.data);
    console.log(legal);
  };
  return legal;
};

export default useGetLegal;
