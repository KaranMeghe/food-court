/* eslint-disable react/react-in-jsx-scope */
import imageError from "../../assets/images/error.jpg";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status, statusText, data } = error;
  console.log(error);
  console.log(error);
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column text-secondary text-center"
      style={{ height: "100vh" }}
    >
      <div className="errorMsg-container ">
        <h1 className="text-secondary">Opps!! Something Went Wrong.</h1>
        <h3>
          {status} {statusText}
        </h3>
        <p>{data}</p>
      </div>

      <img src={imageError} className="w-50 shadow-lg my-3" />
      <Link to="/">
        <button className="my-2 px-5 py-2 btn btn-secondary">Go Home</button>
      </Link>
    </div>
  );
};
export default Error;
