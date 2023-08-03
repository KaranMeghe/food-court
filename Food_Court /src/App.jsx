/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { Outlet } from "react-router-dom";
import { Provider as UserContextProvider } from "./context/UserContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </Provider>
  );
}

export default App;
