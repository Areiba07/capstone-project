import React, { useState } from 'react';

const NotificationTable = () => {
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [selectedNotification, setSelectedNotification] = useState(null); // State to track selected notification
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New message received',
      date: '2023-09-05',
      status: 'unread',
    },
    {
      id: 2,
      message: 'Pending service request "Manong John Gardening Approved"',
      date: '2023-09-04',
      status: 'unread',
    },
    {
      id: 3,
      message: 'Event reminder: Free Financial Literact Training',
      date: '2023-09-03',
      status: 'read',
    },
  ]);

  // Function to open the modal and mark notification as read
  const openModal = (notification) => {
    setSelectedNotification(notification);
    setModalOpen(true);

    // Mark the notification as read
    if (notification.status === 'unread') {
      const updatedNotifications = [...notifications];
      const notificationIndex = updatedNotifications.findIndex((n) => n.id === notification.id);
      if (notificationIndex !== -1) {
        updatedNotifications[notificationIndex].status = 'read';
        setNotifications(updatedNotifications);
      }
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedNotification(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="w-1/6 py-2 text-left">Status</th>
            <th className="w-1/2 py-2 text-left">Message</th>
            <th className="w-1/6 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr
              key={notification.id}
              className={notification.status === 'unread' ? 'bg-yellow-100 cursor-pointer' : 'cursor-pointer'}
              onClick={() => openModal(notification)}
            >
              <td className="py-2">{notification.status}</td>
              <td className="py-2">{notification.message}</td>
              <td className="py-2">{notification.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Notification Modal */}
      {selectedNotification && (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${modalOpen ? 'block' : 'hidden'}`}>
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" onClick={closeModal}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z"></path>
              </svg>
            </div>

            {/* Modal Content */}
            <div className="modal-content py-4 text-left px-6">
              <h1 className="text-2xl font-medium mb-4">{selectedNotification.message}</h1>
              <p className="text-gray-600 text-sm mb-4">Date: {selectedNotification.date}</p>
              <p className="text-gray-600 text-sm">Status: {selectedNotification.status}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationTable;
