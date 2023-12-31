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
import AccountInfo from "./pages/account-info";
import AccountMessage from "./pages/account-messages";
import AccountNotification from "./pages/account-notifications";
import AccountFeedback from "./pages/account-feedback";
import AccountBookmark from "./pages/account-bookmark";
import BrowseCategories from "./components/browse-categories";
import AccountBooking from "./pages/account-booking";
import AdminLogin from "./pages/adminLogin";
import AdminHome from "./pages/admin-home";
import AdminServices from './pages/admin-manage-services';
import AdminUsers from './pages/admin-manage-users';
import AdminPendingServices from './pages/admin-review-service-request';
import AdminReviewFeedback from './pages/admin-review-feedback';
import AccountService from "./pages/account-services";
import { Todos } from "./pages/Todos";
import {Todos2, loader as todos2Loader, action as todos2Action} from "./pages/Todos2";

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
        path: "/todos",
        element: <Todos/>,
      },
      {
        path: "/todos2",
        loader: todos2Loader,
        action: todos2Action,
        element: <Todos2/>,
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
        path: "/seekerLogin",
        element: <SeekerLogin />,
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
        path: "/serviceCards",
        element: <ServiceCards />,
      },
      {
        path: "/serviceBoard",
        element: <ServiceBoard />,
      },
      {
        path: "/provider-view",
        element: <ProviderView/>,
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
        path: "/seeker-home/account-services",
        element: <AccountService />,
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
      {
        path: "/seeker-home/servicesCards",
        element: <ServiceCards />,
      },
      {
        path: "/seeker-home/provider-view",
        element: <ProviderView />,
      },
    ],
  },
  {
    path: "/admin-home",
    element: <AdminHome />,
    children: [
      {
        index: true,
        element: <AdminServices />,
      },
      {
        path: "/admin-home/admin-manage-services",
        element: <AdminServices />,
      },
      {
        path: "/admin-home/admin-manage-users",
        element: <AdminUsers />,
      },
      {
        path: "/admin-home/admin-review-service-request",
        element: <AdminPendingServices />,
      },
      {
        path: "/admin-home/admin-review-feedback",
        element: <AdminReviewFeedback />,
      },
      {
        path: "/admin-home/logout",
        element: <Index />,
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
