import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Pages/Error";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Body from "./Components/layout/Body";
import RestaruntMenu from "./Components/restarunt cards/RestaruntMenu";
import { SupportFaqs } from "./Components/Pages/Support";
import Help from "./Components/Pages/Help";

const SupportOnBoarding = lazy(() => import("./Components/Pages/Support"));
const SupportLegal = lazy(() => import("./Components/Pages/SupportLegal"));
// import SupportLegal from "./Components/Pages/SupportLegal";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
        children: [
          {
            path: "partner-onboarding",
            element: (
              <Suspense>
                <SupportOnBoarding />
              </Suspense>
            ),
          },

          {
            path: "faqs",
            element: <SupportFaqs />,
          },

          {
            path: "legal",
            element: (
              <Suspense>
                <SupportLegal />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restarunt/:restId",
        element: <RestaruntMenu />,
      },
    ],
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<RouterProvider router={appRouter} />);
