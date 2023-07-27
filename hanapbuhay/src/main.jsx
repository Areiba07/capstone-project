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
            path: "/service/service1",
            element: <Service1 />,
          },
          {
            path: "/service/service2",
            element: <Service2 />,
          },
          {
            path: "/service/service3",
            element: <Service3 />,
          },
          {
            path: "/service/service4",
            element: <Service4 />,
          },
          {
            path: "/service/service5",
            element: <Service5 />,
          },
          {
            path: "/service/service6",
            element: <Service6 />,
          },
          {
            path: "/service/service7",
            element: <Service7 />,
          },
          {
            path: "/service/service8",
            element: <Service8 />,
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
            path: "/seeker-home/service/service1",
            element: <Service1 />,
          },
          {
            path: "/seeker-home/service/service2",
            element: <Service2 />,
          },
          {
            path: "/seeker-home/service/service3",
            element: <Service3 />,
          },
          {
            path: "/seeker-home/service/service4",
            element: <Service4 />,
          },
          {
            path: "/seeker-home/service/service5",
            element: <Service5 />,
          },
          {
            path: "/seeker-home/service/service6",
            element: <Service6 />,
          },
          {
            path: "/seeker-home/service/service7",
            element: <Service7 />,
          },
          {
            path: "/seeker-home/service/service8",
            element: <Service8 />,
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
