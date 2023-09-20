import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/navbar-main";
import ModalChatBox from "../components/modalChat";

const ProviderView = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //Approved feedbacks
  const fixedRaters = [
    { name: "John Doe", rating: 4, comment: "Great service!" },
    { name: "Jane Smith", rating: 5, comment: "Highly recommended!" },
    { name: "Tom Johnson", rating: 3, comment: "Good experience." },
    { name: "Alice Brown", rating: 4, comment: "Nice service." },
    { name: "Eva Lee", rating: 2, comment: "Could be better." },
  ];

  // Approved/Fixed booking services with status (blue for done, red for canceled, green for active)
  const fixedBookings = [
    {
      title: "Service 1",
      description: "Sample description of Service 1.",
      date: new Date("2023-09-25"),
      status: "done", // Blue
    },
    {
      title: "Service 2",
      description: "Sample description of Service 2.",
      date: new Date("2023-10-05"),
      status: "canceled", // Red
    },
    {
      title: "Service 3",
      description: "Sample description of Service 3.",
      date: new Date("2023-10-15"),
      status: "active", // Green
    },
  ];

  const [showAddScheduleModal, setShowAddScheduleModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [bookings, setBookings] = useState([]);
  const [ratings, setRatings] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  const handleAddSchedule = () => {
    // Implement logic to add schedule
    const newSchedule = {
      title: title,
      description: description,
      date: date,
      status: "Pending"
    };
    setBookings([...bookings, newSchedule]);
    setShowAddScheduleModal(false);
  };

  const handleRatingSubmit = () => {
    // Implement logic to submit rating and comment
    const newRating = {
      rating: rating,
      comment: comment,
    };
    setRatings([...ratings, newRating]);
    setShowRatingModal(false);
    setRating(0);
    setComment("");
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = (maxRating) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? solidStar : regularStar}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
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
            <h2>Service Name</h2>
            <p>Service Details</p>
          </div>
        </div>
        <div className="contact">
          <button
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={handleOpenModal}
          >
            Contact Provider
          </button>
          {showModal && <ModalChatBox onClose={handleCloseModal} />}
        </div>
        <div className="schedule">
          <h3>Booking Schedule</h3>
          {bookings.map((booking, index) => (
            <div key={index} className="cardSched">
              <h4>{booking.title}</h4>
              <p>
                {booking.description.length > 100
                  ? booking.description.slice(0, 100) + "..."
                  : booking.description}
              </p>
              <p>{booking.date.toLocaleDateString()}</p>
            </div>
          ))}
          <button onClick={() => setShowAddScheduleModal(true)}>
            Add Booking
          </button>
        </div>

        <div className="rating">
          <h3>Rating</h3>
          {ratings.map((rating, index) => (
            <div key={index} className="cardSched">
              <p>Seeker Username</p>
              <div className="stars">{renderStars(rating.rating, 5)}</div>
              <p>{rating.comment}</p>
            </div>
          ))}
          <button onClick={() => setShowRatingModal(true)}>
            Leave a Rating
          </button>
        </div>

        <div className="rating">
         
          {fixedRaters.map((rater, index) => (
            <div key={index} className="cardSched">
              <p>{rater.name}</p>
              <div className="stars">{renderStars(rater.rating, 5)}</div>
              <p>{rater.comment}</p>
            </div>
          ))}
        </div>

        <div className="schedule">
          <h3>Booking Schedule</h3>
          {fixedBookings.map((booking, index) => (
            <div
              key={index}
              className={`cardSched ${
                booking.status === "done"
                  ? "bg-blue-300"
                  : booking.status === "canceled"
                  ? "bg-red-300"
                  : "bg-green-300"
              }`}
            >
              <h4>{booking.title}</h4>
              <p>
                {booking.description.length > 100
                  ? booking.description.slice(0, 100) + "..."
                  : booking.description}
              </p>
              <p>{booking.date.toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        {showAddScheduleModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add Schedule</h2>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a Date"
              />
              <button onClick={handleAddSchedule}>Add</button>
              <button onClick={() => setShowAddScheduleModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {showRatingModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Rating & Comment</h2>
              <div className="stars">{renderStars(5)}</div>
              <textarea
                placeholder="Leave a comment"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button onClick={handleRatingSubmit}>Submit</button>
              <button onClick={() => setShowRatingModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProviderView;
