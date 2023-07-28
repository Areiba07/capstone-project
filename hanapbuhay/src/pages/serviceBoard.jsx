import "../assets/styles/index.css";
import React, { useState } from "react";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";
import { Button } from "flowbite-react";
import "../assets/styles/serviceRequest.css";

Modal.setAppElement("#root");

const RequestBoard = () => {
  const [requests, setRequests] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [requestTitle, setRequestTitle] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTitleChange = (e) => {
    setRequestTitle(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setRequestDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(),
      title: requestTitle,
      details: requestDetails,
    };

    setRequests([...requests, newRequest]);
    setRequestTitle("");
    setRequestDetails("");
    closeModal();
  };

  const truncateDetails = (details, maxLength) => {
    if (details.length <= maxLength) {
      return details;
    }
    return `${details.slice(0, maxLength)}...`;
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 bg-blue-500 text-white py-2 px-4 rounded">
        Request Board
      </h1>

      <Button
        gradientDuoTone="purpleToBlue"
        pill
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  mt-4"
        onClick={openModal}
      >
        Add Request
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-container"
        overlayClassName="overlay"
      >
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2 className="modal-title">Create Request</h2>
          </div>
          <label className="form-label">
            Request Title:
            <input
              className="form-input"
              type="text"
              value={requestTitle}
              onChange={handleTitleChange}
            />
          </label>
          <label className="form-label">
            Request Details:
            <textarea
              className="form-textarea"
              value={requestDetails}
              onChange={handleDetailsChange}
            />
          </label>
          <div className="modal-buttons">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {requests.map((request) => (
          <div
            className="bg-white border-2 text-white p-4 rounded shadow-md"
            style={{ width: "300px" }}
            key={request.id}
          >
            <h3 className="text-xl font-semibold mb-2 bg-blue-500 text-white py-2 px-4 rounded">
              {request.title}
            </h3>
            <p className="bg-white border-4 text-gray-800 p-2 rounded h-20 overflow-hidden">
              {truncateDetails(request.details, 100)}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 font-bold">
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestBoard;
