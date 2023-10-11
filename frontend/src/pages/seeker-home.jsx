import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header-seeker";
import SearchComponent from "../components/search";
import { Outlet, useNavigate } from "react-router";
import FooterWithLogo from "../components/footer";
import axios from "axios";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
let username = "John Doe";

export const loader = async () => {
  const response = await fetch("/api/userHome", {
    //credentials: "include",
  });
  const home = await response.json();
  return { home };
};

export default function UserPage() {
  useIsAuthenticated();
  const navigate = useNavigate();
  const [home, setHome] = useState([]);

  useEffect(() => {
    async function init() {
      const data = await loader();
      setHome(data.home);
    }
    init();
  }, []);

  async function onSignoutClick(){
    await axios({
      method: "POST",
      url: "/api/auth/sign-out"
    });
    navigate("/");
  }

  return (
    <>
      <div className="pl-32">
        <Header />
      </div>
      <div className="pl-80">
        <SearchComponent />
      </div>
      <div className="sidebar w-80 bg-gray-100 p-6 flex flex-col items-center fixed top-0 left-0 h-screen">
        <img
          src="https://picsum.photos/200"
          alt="User"
          className="user-image w-24 h-24 mt-10 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">{username}</h3>
        <ul className="mt-6 space-y-2">
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-info">Account Info</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-services">Services</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-messages">Messages</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-notifications">Notifications</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-booking">Booking</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-bookmark">Bookmarks</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-feedback">Feedback</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <button type="button" onClick={onSignoutClick}>Logout</button>
            </a>
          </li>
        </ul>
      </div>
      <div className="-z-10 ml-80">{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
}
