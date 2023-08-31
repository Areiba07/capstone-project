import React, { useState } from "react";
import Header from "../components/header-provider";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
import ModalChatBox from "../components/modalChat";
const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
            <button
              class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={handleOpenModal}
            >
              Contact Seeker
            </button>
            {showModal && <ModalChatBox onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
};

export default UserPage;
