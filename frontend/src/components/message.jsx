import React, { useState } from 'react';

const Message = ({ message }) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const toggleDetailModal = () => {
    setShowDetailModal(!showDetailModal);
  };

  const toggleReplyModal = () => {
    setShowReplyModal(!showReplyModal);
  };

  const handleReplySubmit = () => {
    // Add your logic to send the reply, e.g., through an API call
    console.log(`Reply sent to ${message.sender}: ${replyContent}`);
    setReplyContent('');
    toggleReplyModal();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <h3 className="text-xl font-semibold">{message.subject}</h3>
      <p className="text-gray-600">From: {message.sender}</p>
      <button
        onClick={toggleDetailModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        View
      </button>

      {showDetailModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="modal-content bg-white w-4/5 lg:w-1/2 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold">Message Details</h2>
            <p>Subject: {message.subject}</p>
            <p>From: {message.sender}</p>
            <p>Date: {message.date}</p>
            <p>Content: {message.content}</p>
            <button
              onClick={toggleReplyModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Reply
            </button>
            <button
              onClick={toggleDetailModal}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showReplyModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="modal-content bg-white w-4/5 lg:w-1/2 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold">Reply to Message</h2>
            <p>Subject: {message.subject}</p>
            <p>To: {message.sender}</p>
            <textarea
              rows="4"
              cols="50"
              placeholder="Compose your reply..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="border rounded p-2 mt-2 w-full"
            />
            <button
              onClick={handleReplySubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Send
            </button>
            <button
              onClick={toggleReplyModal}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
