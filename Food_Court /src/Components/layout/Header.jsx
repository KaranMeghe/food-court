/* eslint-disable react/react-in-jsx-scope */
import { BsFillCartPlusFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between align-items-center px-3 shadow-sm">
        <div className="logo">
          <h1 className="navbar-brand">FOOD COURT</h1>
        </div>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About-us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-items">
              <a className="nav-link">
                <BsFillCartPlusFill className="fs-4" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
