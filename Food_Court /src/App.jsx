/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/layout/Header";
import Body from "./Components/layout/Body";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
