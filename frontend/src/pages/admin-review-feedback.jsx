import React, { useState } from 'react';
import '../assets/styles/index.css';

const FeedbackList = () => {
  const initialFeedback = [
    {
      id: 1,
      feedbackGiver: 'John Doe',
      serviceName: 'Plumbing Repair',
      rating: 4,
      comment: 'Great service!',
      status: 'pending',
    },
    {
      id: 2,
      feedbackGiver: 'Alice Smith',
      serviceName: 'Electrical Installation',
      rating: 5,
      comment: 'Excellent work!',
      status: 'pending',
    },
    {
      id: 3,
      feedbackGiver: 'David Green',
      serviceName: 'Landscaping Services',
      rating: 3,
      comment: 'Could be better.',
      status: 'pending',
    },
    {
      id: 4,
      feedbackGiver: 'Sarah Johnson',
      serviceName: 'Tech Support',
      rating: 5,
      comment: 'Very helpful!',
      status: 'pending',
    },
    {
      id: 5,
      feedbackGiver: 'Emily Brown',
      serviceName: 'Catering for an Event',
      rating: 4,
      comment: 'Good food and service.',
      status: 'pending',
    },
  ];

  const [feedback, setFeedback] = useState(initialFeedback);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleViewFeedback = (feedbackItem) => {
    setSelectedFeedback(feedbackItem);
  };

  const handleApproveFeedback = (feedbackItem) => {
    // Implement logic to approve the feedback
    // Update the status to 'approved' in the state
  };

  const handleDeclineFeedback = (feedbackItem) => {
    // Implement logic to decline the feedback
    // Update the status to 'declined' in the state
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4">Feedback Reviews</h1>

      <ul>
        {feedback.map((feedbackItem) => (
          <li key={feedbackItem.id} className="mb-4">
            <div className="flex items-center justify-between">
              <span>
                Feedback by: {feedbackItem.feedbackGiver} - Service: {feedbackItem.serviceName}
              </span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                onClick={() => handleViewFeedback(feedbackItem)}
              >
                View Feedback
              </button>
            </div>
            {selectedFeedback === feedbackItem && (
              <div className="mt-2 p-2 border border-gray-300 rounded">
                <div>Rating: {feedbackItem.rating} stars</div>
                <div>Comment: {feedbackItem.comment}</div>
                <div className="mt-2">
                  {feedbackItem.status === 'pending' && (
                    <>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                        onClick={() => handleApproveFeedback(feedbackItem)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDeclineFeedback(feedbackItem)}
                      >
                        Decline
                      </button>
                    </>
                  )}
                  {feedbackItem.status === 'approved' && <span className="text-green-600">Approved</span>}
                  {feedbackItem.status === 'declined' && <span className="text-red-600">Declined</span>}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
