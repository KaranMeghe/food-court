import { useState, useEffect } from "react";
import { FETCH_PARTER_ONBOARDING } from "../../config";
import axios from "axios";

const useGetPartnerOnboarding = () => {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    getPartnerOnboarding();
  }, []);

  const getPartnerOnboarding = async () => {
    const data = await axios.get(FETCH_PARTER_ONBOARDING);
    setPartner(data?.data?.data?.issues?.data);
    console.log(partner);
  };
  return partner;
};

export default useGetPartnerOnboarding;
