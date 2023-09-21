import React, { useState } from 'react';
import "../assets/styles/index.css";
const ServiceList = () => {
  const initialServices = [
    {
      id: 1,
      name: 'Johns Plumbing',
      owner: 'John Doe',
      address: '123 Main St',
      contact: '555-123-4567',
      email: 'john@example.com',
      status: 'active',
    },
    {
        id: 2,
        name: 'Smith Electricals',
        owner: 'Alice Smith',
        address: '456 Elm St',
        contact: '555-987-6543',
        email: 'alice@example.com',
        status: 'active',
      },
      {
        id: 3,
        name: 'Green Landscaping',
        owner: 'David Green',
        address: '789 Oak St',
        contact: '555-789-1234',
        email: 'david@example.com',
        status: 'inactive',
      },
      {
        id: 4,
        name: 'Tech Solutions Inc.',
        owner: 'Sarah Johnson',
        address: '1010 Pine St',
        contact: '555-345-6789',
        email: 'sarah@example.com',
        status: 'active',
      },
      {
        id: 5,
        name: 'Healthy Bites Cafe',
        owner: 'Emily Brown',
        address: '222 Cedar St',
        contact: '555-234-5678',
        email: 'emily@example.com',
        status: 'active',
      },
    
  ];

  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const handleManageClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleStatusToggle = () => {
    // Implement logic to toggle service status (active/inactive)
    // Update the state accordingly
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes to service details
    // Update the state accordingly
  };

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4">Service List</h1>
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="mt-4">
        {filteredServices.map((service) => (
          <li key={service.id} className="flex items-center justify-between mb-2">
            <span>
              {service.name} - {service.owner}
            </span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
              onClick={() => handleManageClick(service)}
            >
              Manage
            </button>
          </li>
        ))}
      </ul>

      {selectedService && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <div className="font-semibold mb-2">Service Details:</div>
          <div>Name: {selectedService.name}</div>
          <div>Owner: {selectedService.owner}</div>
          <div>Address: {selectedService.address}</div>
          <div>Contact: {selectedService.contact}</div>
          <div>Email: {selectedService.email}</div>
          <div className="mt-2">
            Status:{' '}
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedService.status === 'active'}
                onChange={handleStatusToggle}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Active</span>
            </label>
          </div>
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-700"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-400 text-white px-2 py-1 rounded mt-2 ml-2 hover:bg-gray-600"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
