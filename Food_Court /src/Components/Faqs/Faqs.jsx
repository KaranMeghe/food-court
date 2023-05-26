/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import useGetFaqs from "../utils/UseGetFaqs";
import bootstrap from "bootstrap/dist/js/bootstrap";

const Faqs = () => {
  const faqs = useGetFaqs();
  console.log(faqs);

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <>
      {faqs.map((faq) => {
        return (
          <div className="accordion" id="accordionExample" key={faq?.id}>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {faq?.title}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="mb-2">{faq?.description}</p>
                  <a
                    href={faq?.hyperLink}
                    className="text-decoration-none text-dark"
                  >
                    {faq?.hyperLinkText}
                  </a>
                  <br />
                  {faq?.options?.[0]?.type === "email" ? (
                    <button className="my-2 bg-transparent border border-primary text-primary">
                      SEND AN EMAIL
                    </button>
                  ) : null}
                  <br />
                  <p
                    className="text-secondary fw-light"
                    style={{ fontSize: "9px" }}
                  >
                    {faq?.options?.[0]?.waitTime}
                  </p>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Faqs;
