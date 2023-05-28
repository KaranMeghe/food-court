import Faqs from "../Faqs/Faqs";
import useGetFaqs from "../utils/UseGetFaqs";
// import PartnerOnboarding from "./PartnerOnboarding";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
const Help = () => {
  const faqs = useGetFaqs();
  console.log(faqs);
  return (
    <section id="help" className="bg-light border-bottom">
      <div id="heading_msg_container" className="pt-5">
        <h2>Help & Support</h2>
        <p>Let&apos; s take a step ahead and help you better.</p>
      </div>

      <div className="d-flex w-full">
        <div className="w-100">
          {faqs.map((faq) => {
            console.log(faq);
            return (
              <Faqs key={faq.id} faq={faq} className="d-flex flex-column" />
            );
          })}
        </div>

        <div className="w-25 d-flex flex-column">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </section>
  );
};

export default Help;
