import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header-seeker";
import SearchComponent from "../components/search";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
let username = "John Doe";
const UserPage = () => {
  return (
    <>
      <div className="pl-32"><Header /></div>
      <div className="pl-80"><SearchComponent/></div>
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
              <Link to="/seeker-home/account-bookmark">Bookmarks</Link>
            </a>
          </li>
          <li className="cursor-pointer">
            <a>
              <Link to="/seeker-home/account-feedback">Feedback</Link>
            </a>
          </li>
        </ul>
      </div>
      <div className="-z-10 ml-80">{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
};

export default UserPage;
