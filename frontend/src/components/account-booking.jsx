import React, { useState } from 'react';

const BookingCard = ({ date, serviceProvider, status, onCancel }) => {
  let statusClass = '';

  if (status === 'Pending') {
    statusClass = 'bg-yellow-200 text-yellow-800';
  } else if (status === 'Ongoing') {
    statusClass = 'bg-blue-200 text-blue-800';
  } else if (status === 'Done') {
    statusClass = 'bg-green-200 text-green-800';
  } else if (status === 'Cancelled') {
    statusClass = 'bg-red-200 text-red-800';
  }

  return (
    <div className={`p-4 rounded-lg shadow-lg ${statusClass}`}>
      <h3 className="text-xl font-semibold">{status} Booking</h3>
      <p className="text-gray-600">Date: {date}</p>
      <p className="text-gray-600">Service Provider: {serviceProvider}</p>
      {status === 'Ongoing' && (
        <button
          onClick={onCancel}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

const AccountBooking = () => {
  const [bookings, setBookings] = useState([
    { date: '2023-09-10', serviceProvider: 'John Doe', status: 'Pending' },
    { date: '2023-09-12', serviceProvider: 'Jane Smith', status: 'Ongoing' },
    { date: '2023-09-15', serviceProvider: 'Bob Johnson', status: 'Done' },
    { date: '2023-09-18', serviceProvider: 'Alice Brown', status: 'Cancelled' },
  ]);

  const handleCancel = (index) => {
    // Change the status of the booking to "Cancelled"
    const updatedBookings = [...bookings];
    updatedBookings[index].status = 'Cancelled';
    setBookings(updatedBookings);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Booking Status</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bookings.map((booking, index) => (
            <BookingCard
              key={index}
              date={booking.date}
              serviceProvider={booking.serviceProvider}
              status={booking.status}
              onCancel={() => handleCancel(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountBooking;
