/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import bootstrap from "bootstrap/dist/js/bootstrap";

const Faqs = ({ faq }) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  return (
    <section id="faq-accordion" className="bg-white">
      <div className="border border-secondary text-primary fw-light">
        <div id="faqs" className="d-flex justify-content-between">
          <h5 className="fw-light">{faq?.title}</h5>
          {isVisible ? (
            <GoChevronDown
              className="fs-3 fw-lighter"
              onClick={toggleVisible}
            />
          ) : (
            <GoChevronUp className="fs-3 fw-lighter" onClick={toggleVisible} />
          )}
        </div>

        {isVisible ? (
          <div id="respond">
            <p>{faq?.description}</p>
            <a href={faq?.hyperLink}>{faq?.hyperLinkText}</a> <br />
            {faq?.options[0]?.type === "email" ? (
              <button>SEND AN EMAIL</button>
            ) : null}
            <p>{faq?.options[0]?.waitTime}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Faqs;
