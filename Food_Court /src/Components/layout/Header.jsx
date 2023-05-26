/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import useOnline from "../utils/useOnline";
import { FcApproval, FcCancel } from "react-icons/fc";
import bootstrap from "bootstrap/dist/js/bootstrap";

const Navbar = () => {
  const isOnline = useOnline();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center px-3 shadow-sm fixed-top collapse">
        <div className="container-fluid">
          <div className="logo d-flex justify-content-between w-100">
            <Link to="/" className="text-decoration-none">
              <h1 className="navbar-brand ">FOOD COURT</h1>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fs-6"></span>
            </button>
          </div>

          <div id="navbarSupportedContent">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ width: "111%" }}
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    Help
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <RxPerson style={{ fontSize: "20px" }} /> SignIn
                  </Link>
                </li>

                <li className="nav-items">
                  <Link className="nav-link" to="/cart">
                    <BsFillCartPlusFill className="fs-4" />
                  </Link>
                </li>

                <li className="nav-items">
                  <Link className="nav-link" style={{ fontSize: "16px" }}>
                    {isOnline ? <FcApproval /> : <FcCancel />}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
