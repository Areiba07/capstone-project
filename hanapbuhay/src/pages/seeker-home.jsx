import React, { useState } from "react";
import Header from "../components/header";
const UserPage = () => {
  return (
    <>
    <Header/>
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
    </>
  );
};

export default UserPage;
