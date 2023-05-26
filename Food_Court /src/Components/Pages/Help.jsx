import Faqs from "../Faqs/Faqs";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
const Help = () => {
  return (
    <section id="help" style={{ background: "#1289A7", height: "100vh" }}>
      <div id="heading_msg_container" className="pt-5">
        <h2>Help & Support</h2>
        <p>Let&apos; s take a step ahead and help you better.</p>
      </div>

      <Faqs />
    </section>
  );
};

export default Help;
