/* eslint-disable react/react-in-jsx-scope */
import Faqs from "../Faqs/Faqs";
import useGetFaqs from "../utils/UseGetFaqs";

export const SupportFaqs = () => {
  const faqs = useGetFaqs();
  console.log(faqs);

  return (
    <div className="w-100">
      <h2 className="my-3">FAQs</h2>
      {faqs.map((faq) => {
        console.log(faq);
        return <Faqs key={faq.id} faq={faq} className="d-flex flex-column" />;
      })}
    </div>
  );
};
