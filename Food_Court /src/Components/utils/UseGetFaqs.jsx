import { useState, useEffect } from "react";
import { FETCH_FAQS } from "../../config";
import axios from "axios";

const useGetFaqs = () => {
  const [faq, setFaqs] = useState([]);

  useEffect(() => {
    getFaqs();
  }, []);

  const getFaqs = async () => {
    const data = await axios.get(FETCH_FAQS);
    console.log(data);
    setFaqs(data?.data?.data?.issues?.data);
    console.log(data?.data?.data?.issues?.data);
  };
  return faq;
};

export default useGetFaqs;
