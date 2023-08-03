/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { render } from "@testing-library/react";
import Navbar from "../layout/Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Provider as UserContextProvider } from "../../context/UserContextProvider";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be load on rendering Headers", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContextProvider>
          <Navbar />
        </UserContextProvider>
      </Provider>
    </StaticRouter>
  );
});

test("cartItems.length should be 0 in initial render", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <UserContextProvider>
          <Navbar />
        </UserContextProvider>
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const cart = header.getByTestId("cart");
  console.log(cart);
  // expect(cart.innerHTML).toBe("0");
  expect(cart.textContent).toBe("0");
});
