import "../assets/styles/index.css";
import React, { useState } from 'react';
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css';
import { Button } from "flowbite-react";

Modal.setAppElement('#root');

const RequestBoard = () => {
  const [requests, setRequests] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDetails, setRequestDetails] = useState('');

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
    setRequestTitle('');
    setRequestDetails('');
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

      <Button gradientDuoTone="purpleToBlue" pill
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  mt-4"
        onClick={openModal}
      >
        Add Request
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal bg-violet-200 z-50 w-auto h-1/2 ml-96 pl-48 pr-48 mt-48"
        overlayClassName="overlay"
      >
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <h2 className="text-2xl font-bold">Create Request</h2>
        </div>
          <label className="text-lg font-semibold mb-2">
            Request Title:
            <input
              className="w-full px-4 py-2 border rounded"
              type="text"
              value={requestTitle}
              onChange={handleTitleChange}
            />
          </label>
          <label className="text-lg font-semibold mb-2">
            Request Details:
            <textarea
              className="w-full h-32 px-4 py-2 border rounded resize-none"
              value={requestDetails}
              onChange={handleDetailsChange}
            />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 font-bold"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </form>
      </Modal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {requests.map((request) => (
          <div
            className="bg-purple-500 text-white p-4 rounded shadow-md"
            style={{ width: '300px' }}
            key={request.id}
          >
            <h3 className="text-xl font-semibold mb-2 bg-blue-500 text-white py-2 px-4 rounded">
              {request.title}
            </h3>
            <p className="bg-white text-gray-800 p-2 rounded h-20 overflow-hidden">
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


