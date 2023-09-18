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
import AccountInfo from "./components/account-info";
import AccountMessage from "./components/account-messages";
import AccountNotification from "./components/account-notifications";
import AccountFeedback from "./components/account-feedback";
import AccountBookmark from "./components/account-bookmark";
import BrowseCategories from "./components/browse-categories";
import AccountBooking from "./components/account-booking";
import AdminLogin from "./pages/adminLogin";
import AdminHome from "./pages/admin-home";

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
        path: "/serviceBoard",
        element: <ServiceBoard />,
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
      },
      {
        path: "/provider-home/home",
        element: <GeneralServices />,
      },
      {
        path: "/provider-home/serviceboard",
        element: <RequestBoard />,
      },
    ],
  },
  {
    path: "/seeker-home",
    element: <SeekerHome />,
    children: [
      {
        index: true,
        element: <BrowseCategories />,
      },
      { path: "/seeker-home/home", element: <BrowseCategories /> },
      {
        path: "/seeker-home/serviceBoard",
        element: <ServiceBoard />,
      },
      {
        path: "/seeker-home/account-info",
        element: <AccountInfo />,
      },
      {
        path: "/seeker-home/account-messages",
        element: <AccountMessage />,
      },
      {
        path: "/seeker-home/account-notifications",
        element: <AccountNotification />,
      },
      {
        path: "/seeker-home/account-booking",
        element: <AccountBooking />,
      },
      {
        path: "/seeker-home/account-bookmark",
        element: <AccountBookmark />,
      },
      {
        path: "/seeker-home/account-feedback",
        element: <AccountFeedback />,
      },
    ],
  },
  {
    path: "/provider-view",
    element: <ProviderView />,
  },
  {
    path: "/seeker-view",
    element: <SeekerView />,
  },
  {
    path: "/providerLogin",
    element: <ProviderLogin />,
  },
  {
    path: "/seekerLogin",
    element: <SeekerLogin />,
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin-home",
    element: <AdminHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
