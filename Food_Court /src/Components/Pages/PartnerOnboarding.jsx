/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import useIsVisible from "../utils/useIsVisible";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import useGetFaqs from "../utils/UseGetFaqs";

const PartnerOnboarding = ({ partner }) => {
  const [isVisible, toggleVisible] = useIsVisible();

  return (
    <section
      id="partner-accordion"
      className="bg-white w-full"
      onClick={toggleVisible}
    >
      <div className="border border-secondary border-top-0 text-secondary fw-light p-2 w-100">
        <div id="faqs" className="d-flex justify-content-between">
          <h5 className="fw-light">{partner?.title}</h5>
          {isVisible ? (
            <GoChevronUp className="fs-3 fw-lighter" />
          ) : (
            <GoChevronDown className="fs-3 fw-lighter" />
          )}
        </div>

        {isVisible ? (
          <div id="respond">
            <p className="text-secondary">{partner?.description}</p>
            <a
              href={partner?.hyperLink}
              className="text-decoration-none text-secondary hover-dark"
            >
              {partner?.hyperLinkText}
            </a>
            <br />
            {partner?.options[0]?.type === "email" ? (
              <button className="my-2 btn btn-outline-secondary">
                SEND AN EMAIL
              </button>
            ) : null}
            <p
              style={{ fontSize: "10px", fontWeight: "300" }}
              className="text-secondary"
            >
              {partner?.options[0]?.waitTime}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PartnerOnboarding;
