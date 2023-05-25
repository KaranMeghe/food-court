/* eslint-disable react/react-in-jsx-scope */
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import useOnline from "../utils/useOnline";
import { FcApproval, FcCancel } from "react-icons/fc";

const Navbar = () => {
  const isOnline = useOnline();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center px-3 shadow-sm fixed-top">
        <div className="logo">
          <Link to="/" className="text-decoration-none">
            <h1 className="navbar-brand ">FOOD COURT</h1>
          </Link>
        </div>

        <div id="navbarSupportedContent" className="w-35">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <RxPerson style={{ fontSize: "20px" }} /> Sign in
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
      </nav>
    </header>
  );
};

export default Navbar;
