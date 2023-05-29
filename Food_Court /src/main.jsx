import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Pages/Error";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Body from "./Components/layout/Body";
import RestaruntMenu from "./Components/restarunt cards/RestaruntMenu";
// import Faqs from "./Components/Faqs/Faqs";
import PartnerOnboarding from "./Components/Pages/PartnerOnboarding";
import Faqs from "./Components/Faqs/Faqs";
const Help = lazy(() => import("./Components/Pages/Help"));

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
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
        children: [
          {
            path: "partner-onboarding",
            element: <PartnerOnboarding />,
          },
          {
            path: "faqs",
            element: <Faqs />,
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
