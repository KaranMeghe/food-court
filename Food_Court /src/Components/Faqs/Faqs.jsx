/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import useIsVisible from "../utils/useIsVisible";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Faqs = ({ faq }) => {
  const [isVisible, toggleVisible] = useIsVisible();

  return (
    <section
      id="faq-accordion"
      className="bg-white w-full"
      onClick={toggleVisible}
    >
      <div className="border border-secondary border-top-0 text-secondary fw-light p-2 w-100">
        <div id="faqs" className="d-flex justify-content-between">
          <h5 className="fw-light">{faq?.title}</h5>
          {isVisible ? (
            <GoChevronUp className="fs-3 fw-lighter" />
          ) : (
            <GoChevronDown className="fs-3 fw-lighter" />
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
              <button className="my-2 btn btn-outline-secondary">
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
