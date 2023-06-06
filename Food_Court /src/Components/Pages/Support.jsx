/* eslint-disable react/react-in-jsx-scope */
import Faqs from "../Faqs/Faqs";
import useGetFaqs from "../utils/UseGetFaqs";
<<<<<<< HEAD
import useGetPartnerOnboarding from "../utils/useGetPartnerOnboarding";
import PartnerOnboarding from "../Pages/PartnerOnboarding";
=======
>>>>>>> route

export const SupportFaqs = () => {
  const faqs = useGetFaqs();
  console.log(faqs);

  return (
    <div className="w-100">
<<<<<<< HEAD
      <h2 className="my-2">Faqs</h2>
=======
      <h2 className="my-3">FAQs</h2>
>>>>>>> route
      {faqs.map((faq) => {
        console.log(faq);
        return <Faqs key={faq.id} faq={faq} className="d-flex flex-column" />;
      })}
    </div>
  );
};
<<<<<<< HEAD

const SupportOnBoarding = () => {
  const partnerOnboarding = useGetPartnerOnboarding();
  return (
    <div className="w-100">
      <h2 className="my-2">Partner Onboarding</h2>
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
=======
>>>>>>> route
