import "../assets/styles/index.css";
import React, { useState } from "react";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";
import { Button } from "flowbite-react";
import "../assets/styles/serviceRequest.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

const RequestBoard = () => {
  const [requests, setRequests] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [requestTitle, setRequestTitle] = useState("");
  const [requestDetails, setRequestDetails] = useState("");
  const [startDate, setRequestStartDate] = useState(new Date());
  const [endDate, setRequestEndDate] = useState(new Date());
  const [selectedRequest, setSelectedRequest] = useState(null);

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

  const handleStartDateChange = (date) => {
    setRequestStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setRequestEndDate(date);
  };
  const handleSeeMore = (request) => {
    setSelectedRequest(request);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(),
      title: requestTitle,
      details: requestDetails,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
    };

    setRequests([...requests, newRequest]);
    setRequestTitle("");
    setRequestDetails("");
    setRequestStartDate(new Date());
    setRequestEndDate(new Date());
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
          <label className="form-label">
            Start Date:
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            End Date:
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              className="form-input"
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
            <p className="text-gray-600">
              {truncateDetails(request.details, 50)}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 font-bold"
              onClick={() => handleSeeMore(request)}
            >
              See More
            </button>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-lg font-semibold mb-4">
              {selectedRequest.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedRequest.details}</p>
            <p className="mb-2">Start Date: {selectedRequest.startDate}</p>
            <p className="mb-2">End Date: {selectedRequest.endDate}</p>
            <div className="flex flex-row">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => setSelectedRequest(null)}
            >
              Close
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
            >
              Accept Request
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Contact Requester
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestBoard;
