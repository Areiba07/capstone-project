import React, { useState } from 'react';
import '../assets/styles/index.css';

const ServiceRequestList = () => {
  const initialRequests = [
    {
      id: 1,
      serviceName: 'Plumbing Repair',
      requestorName: 'John Doe',
      address: '123 Main St',
      contact: '555-123-4567',
      email: 'john@example.com',
      status: 'pending',
    },
    {
      id: 2,
      serviceName: 'Electrical Installation',
      requestorName: 'Alice Smith',
      address: '456 Elm St',
      contact: '555-987-6543',
      email: 'alice@example.com',
      status: 'pending',
    },
    {
      id: 3,
      serviceName: 'Landscaping Services',
      requestorName: 'David Green',
      address: '789 Oak St',
      contact: '555-789-1234',
      email: 'david@example.com',
      status: 'pending',
    },
    {
      id: 4,
      serviceName: 'Tech Support',
      requestorName: 'Sarah Johnson',
      address: '1010 Pine St',
      contact: '555-345-6789',
      email: 'sarah@example.com',
      status: 'pending',
    },
    {
      id: 5,
      serviceName: 'Catering for an Event',
      requestorName: 'Emily Brown',
      address: '222 Cedar St',
      contact: '555-234-5678',
      email: 'emily@example.com',
      status: 'pending',
    },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleVerifyDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleAcceptRequest = (request) => {
    // Implement logic to accept the service request
    // Update the status to 'approved' in the state
  };

  const handleDeclineRequest = (request) => {
    // Implement logic to decline the service request
    // Update the status to 'declined' in the state
  };

  const filteredRequests = requests.filter((request) =>
    request.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4">Service Requests</h1>

      <input
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        type="text"
        placeholder="Search service requests..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredRequests.map((request) => (
          <li key={request.id} className="mb-4">
            <div className="flex items-center justify-between">
              <span>
                Service: {request.serviceName} - Requestor: {request.requestorName}
              </span>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                onClick={() => handleVerifyDetails(request)}
              >
                Verify Details
              </button>
            </div>
            {selectedRequest === request && (
              <div className="mt-2 p-2 border border-gray-300 rounded">
                <div>Address: {request.address}</div>
                <div>Contact: {request.contact}</div>
                <div>Email: {request.email}</div>
                <div className="mt-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                    onClick={() => handleAcceptRequest(request)}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDeclineRequest(request)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRequestList;
