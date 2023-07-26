import React, { useState } from "react";
import Header from "../components/header-provider";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
const UserPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="profile">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            className="profile-image"
          />
          <div className="details">
            <h2>User Name</h2>
            <p>User Bio</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center h-screen">
        <div class="w-500 h-300 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIqTA-V654XJcRmVOOTRG4-GONkgIRslerTMVM9wIg_A74i0k1ZzZmO5Z3DKiRx89-9E&usqp=CAU"
            alt="Photo"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold">Request Title</h2>
            <p class="text-gray-600 mt-2">Request Description</p>
          </div>
        </div>
      </div>
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
};

export default UserPage;
