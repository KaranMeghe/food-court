import { Link, Outlet } from "react-router-dom";
import Happy from "../../assets/images/Happy.png";
import { useState } from "react";
// import Faqs from "../Faqs/Faqs";
// import PartnerOnboarding from "./PartnerOnboarding";
// import PartnerOnboarding from "./PartnerOnboarding";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
const Help = () => {
  return (
    <section id="help" className="bg-light border-bottom">
      <div id="heading_msg_container" className="pt-5">
        <h2>Help & Support</h2>
        <p>Let&apos; s take a step ahead and help you better.</p>
      </div>

      <div className="d-flex justify-content-around ">
        <Outlet />

        <div className="w-25 d-flex flex-column align-items-center">
          <Link to="partner-onboarding">PartnerOnboarding</Link>
          <Link to="faqs">FAQs</Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
