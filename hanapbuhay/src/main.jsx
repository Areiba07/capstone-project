import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./error-page";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/service";
import Login from "./pages/login";
import Service1 from "./pages/service1";
import Service2 from "./pages/service2";
import Service3 from "./pages/service3";
import Service4 from "./pages/service4";
import Service5 from "./pages/service5";
import Service6 from "./pages/service6";
import Service7 from "./pages/service7";
import Service8 from "./pages/service8";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    //sign up
  },
  {
    path: "/service1",
    element: <Service1 />,
  },
  {
    path: "/service2",
    element: <Service2 />,
  },
  {
    path: "/service3",
    element: <Service3 />,
  },
  {
    path: "/service4",
    element: <Service4 />,
  },
  {
    path: "/service5",
    element: <Service5 />,
  },
  {
    path: "/service6",
    element: <Service6 />,
  },
  {
    path: "/service7",
    element: <Service7 />,
  },
  {
    path: "/service8",
    element: <Service8 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
