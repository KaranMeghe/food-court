/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/layout/Header";
import { Outlet } from "react-router-dom";
import { Provider as UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
    </UserContextProvider>
  );
}

export default App;
