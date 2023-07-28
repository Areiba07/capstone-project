import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/header-provider";
import { Outlet } from "react-router";
import FooterWithLogo from "../components/footer";
import "../assets/styles/index.css";

const UserPage = () => {
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
            <h2>User Name</h2>
            <p>User Bio</p>
          </div>
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
            Add Schedule
          </button>
        </div>

        <div className="rating">
          <h3>Rating</h3>
          {ratings.map((rating, index) => (
            <div key={index} className="card">
              <div className="stars">{renderStars(rating.rating, 5)}</div>
              <p>{rating.comment}</p>
            </div>
          ))}
          <button onClick={() => setShowRatingModal(true)}>
            View Ratings
          </button>
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
              <button onClick={() => setShowRatingModal(false)}>Close</button>
              <h2>Rating & Comments</h2>
              <div>
                <div className="stars">{renderStars(4)}</div>
                <textarea
                  rows="2"
                  value="Good Service"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div>
                <div className="stars">{renderStars(3)}</div>
                <textarea
                  placeholder="Leave a comment"
                  rows="2"
                  value="Ok Service"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>{<Outlet />}</div>
      <FooterWithLogo />
    </>
  );
};

export default UserPage;
