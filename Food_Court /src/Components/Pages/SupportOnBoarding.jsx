/* eslint-disable react/react-in-jsx-scope */
import PartnerOnboarding from "./PartnerOnboarding";
import useGetPartnerOnboarding from "../utils/UseGetPartnerOnboarding";
const SupportOnBoarding = () => {
  const partnerOnboarding = useGetPartnerOnboarding();
  return (
    <div className="w-100">
      <h2 className="my-3">Partner Onboarding</h2>
      {partnerOnboarding.map((partner) => {
        return (
          <PartnerOnboarding
            key={partner.id}
            partner={partner}
            className="d-flex flex-column"
          />
        );
      })}
    </div>
  );
};
export default SupportOnBoarding;
