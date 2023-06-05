/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Happy from "../../assets/images/Happy.png";

const Help = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <section id="help" className="bg-light border-bottom">
      <div id="heading_msg_container" className="pt-5">
        <h2>Help & Support</h2>
        <p>Let&apos; s take a step ahead and help you better.</p>
      </div>

      <div className="d-flex justify-content-around">
        {isVisible ? <img src={Happy} className="w-50" /> : null}
        <Outlet />
        <div className="w-25 d-flex flex-column align-items-center">
          <Link
            to="partner-onboarding"
            className="text-decoration-none fs-4 my-4"
            onClick={() => setIsVisible(false)}
          >
            Partner Onboarding
          </Link>
          <Link
            to="faqs"
            className="text-decoration-none fs-4"
            onClick={() => setIsVisible(false)}
          >
            FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
