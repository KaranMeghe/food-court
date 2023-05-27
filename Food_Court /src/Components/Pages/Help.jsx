import Faqs from "../Faqs/Faqs";
import useGetFaqs from "../utils/UseGetFaqs";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
const Help = () => {
  const faqs = useGetFaqs();
  console.log(faqs);
  return (
    <section id="help" style={{ background: "#1289A7" }}>
      <div id="heading_msg_container" className="pt-5">
        <h2>Help & Support</h2>
        <p>Let&apos; s take a step ahead and help you better.</p>
      </div>
      {faqs.map((faq) => {
        console.log(faq);
        return <Faqs key={faq.id} faq={faq} />;
      })}
    </section>
  );
};

export default Help;
