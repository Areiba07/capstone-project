import React, { useState } from 'react';

// Helper function to generate star icons based on the rating
const renderStars = (starRating) => {
  const roundedRating = Math.min(Math.round(starRating), 5); // Limit to a maximum of 5 stars
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(
        <span key={i} className="text-yellow-500">&#9733;</span>
      ); // Full star
    } else {
      stars.push(
        <span key={i} className="text-gray-400">&#9733;</span>
      ); // Empty star
    }
  }

  return stars;
};

const ServiceReviewCard = ({ serviceName, starRating, comment }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold text-gray-800">{serviceName}</h3>
      <div className="flex items-center text-yellow-500">
        {renderStars(starRating)}
      </div>
      <p className="text-gray-600 mt-2">Comment: {comment}</p>
    </div>
  );
};

const AccountFeedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [comment, setComment] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFeedback = () => {
    // Create a new feedback object
    const newFeedback = {
      service: selectedService,
      rating: parseFloat(starRating),
      comment,
    };

    // Add the new feedback to the feedbackList array
    setFeedbackList([...feedbackList, newFeedback]);

    // Reset form fields
    setSelectedService('');
    setStarRating(0);
    setComment('');

    closeModal();
  };

  const reviews = [
    {
      serviceName: 'Jokjak Plumbing',
      starRating: 4.5,
      comment: 'Great service, highly recommended!',
    },
    {
      serviceName: 'Maria Gardening',
      starRating: 3.0,
      comment: 'Decent service, could be improved.',
    },
    {
      serviceName: 'Nena Pedicure',
      starRating: 5.0,
      comment: 'Exceptional service, exceeded expectations!',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Service Reviews
      </h1>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Add Feedback
      </button>
      {feedbackList.map((feedback, index) => (
        <ServiceReviewCard
          key={index}
          serviceName={feedback.service}
          starRating={feedback.rating}
          comment={feedback.comment}
        />
      ))}
      {reviews.map((review, index) => (
        <ServiceReviewCard
          key={index}
          serviceName={review.serviceName}
          starRating={review.starRating}
          comment={review.comment}
        />
      ))}
      <div>
        {/* Feedback Modal */}
        <div
          className={`${
            isModalOpen ? 'block' : 'hidden'
          } fixed z-10 inset-0 overflow-y-auto`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-1/2 p-4 rounded-lg shadow-xl">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Add Feedback
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Close
                </button>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-bold"
                >
                  Select Service:
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Service 1">Service 1</option>
                  <option value="Service 2">Service 2</option>
                  <option value="Service 3">Service 3</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-bold"
                >
                  Star Rating:
                </label>
                <input
                  type="number"
                  id="rating"
                  value={starRating}
                  onChange={(e) => setStarRating(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comment"
                  className="block text-gray-700 font-bold"
                >
                  Comment:
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAddFeedback}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountFeedback;
