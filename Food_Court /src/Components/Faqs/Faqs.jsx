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
    <section id="faq-accordion" className="bg-white w-full">
      <div className="border border-secondary border-top-0 text-primary fw-light p-2 w-75">
        <div id="faqs" className="d-flex justify-content-between">
          <h5 className="fw-light">{faq?.title}</h5>
          {isVisible ? (
            <GoChevronUp className="fs-3 fw-lighter" onClick={toggleVisible} />
          ) : (
            <GoChevronDown
              className="fs-3 fw-lighter"
              onClick={toggleVisible}
            />
          )}
        </div>

        {isVisible ? (
          <div id="respond">
            <p className="text-secondary">{faq?.description}</p>
            <a
              href={faq?.hyperLink}
              className="text-decoration-none text-secondary hover-dark"
            >
              {faq?.hyperLinkText}
            </a>
            <br />
            {faq?.options[0]?.type === "email" ? (
              <button className="my-2 btn btn-outline-primary">
                SEND AN EMAIL
              </button>
            ) : null}
            <p
              style={{ fontSize: "10px", fontWeight: "300" }}
              className="text-secondary"
            >
              {faq?.options[0]?.waitTime}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Faqs;
