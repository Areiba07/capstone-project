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
import GeneralServices from "./pages/generalService";
import "flowbite/dist/flowbite.css";
import Signup from "./pages/signup";
import SeekerSignup from "./pages/seekerSignup";
import ProviderSignup from "./pages/providerSignup";
import ServiceDirectory from "./pages/serviceDirectory";
import ServiceBoard from "./pages/serviceBoard";
import ProviderHome from "./pages/provider-home";
import SeekerHome from "./pages/seeker-home";
import ProviderView from "./pages/provider-view";
import SeekerLogin from "./pages/seekerLogin";
import ProviderLogin from "./pages/providerLogin";
import Index from "./components/index";
import Categories from "./components/categories";
import RequestBoard from "./pages/requestBoard";
import SeekerView from "./pages/seeker-view";
import SearchResult from "./pages/searchResult";
import ServiceCards from "./components/servicesCards";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/providerSignup",
        element: <ProviderSignup />,
      },
      {
        path: "/seekerSignup",
        element: <SeekerSignup />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
      {
        path: "/service",
        element: <Services />,
        children: [
          {
            index: true,
            element: <GeneralServices />,
          },
          {
            path: "/service/serviceDirectory",
            element: <ServiceDirectory />,
          },
          {
            path: "/service/serviceCards",
            element: <ServiceCards />,
          },
        ],
      },
      {
        path: "/serviceBoard",
        element: <ServiceBoard />,
      },
    ],
  },
  {
    path: "/login/signup", //signup on login page
    element: <Signup />,
  },
  {
    path: "/provider-home",
    element: <ProviderHome />,
    children: [
      {
        index: true,
        element: <Index />,
      },{
        path: "/provider-home/home",
        element: <GeneralServices/>,
      },{
        path: "/provider-home/serviceboard",
        element: <RequestBoard/>,
      },
    ],
  },
  {
    path: "/seeker-home",
    element: <SeekerHome />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      { path: "/seeker-home/home", element: <Index /> },
      {
        path: "/seeker-home/service",
        element: <Categories />,
        children: [
          {
            index: true,
            element: <GeneralServices />,
          },
          {
            path: "/seeker-home/service/serviceDirectory",
            element: <ServiceDirectory />,
          },
          {
            path: "/seeker-home/service/serviceCards",
            element: <ServiceCards />,
          },
        ],
      },
      {
        path: "/seeker-home/serviceBoard",
        element: <ServiceBoard />,
      },
    ],
  },
  {
    path: "/provider-view",
    element: <ProviderView />,
  },
  {
    path: "/seeker-view",
    element: <SeekerView/>,
  },
  {
    path: "/providerLogin",
    element: <ProviderLogin />,
  },
  {
    path: "/seekerLogin",
    element: <SeekerLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
