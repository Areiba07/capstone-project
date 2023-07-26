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
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
};

export default UserPage;
