import React, { useState } from "react";

function ServicePage() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    type: "",
    description: "",
    status: "pending", // Default status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = () => {
    if (services.some((service) => service.status === "pending")) {
      alert("You cannot add more services while there is a pending service.");
      return;
    }

    setServices([...services, newService]);
    setNewService({
      name: "",
      address: "",
      contactNumber: "",
      email: "",
      type: "",
      description: "",
      status: "pending",
    });
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-semibold mb-4">Service Page</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Add Service</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newService.name}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={newService.address}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            value={newService.contactNumber}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={newService.email}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Type of Service"
            name="type"
            value={newService.type}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Short Description"
            name="description"
            value={newService.description}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
        >
          Add Service
        </button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-yellow-200 p-4 rounded-lg mb-4 ${
              service.status === "pending" ? "border border-yellow-600" : ""
            }`}
          >
            <p className="mb-1">Name: {service.name}</p>
            <p className="mb-1">Address: {service.address}</p>
            <p className="mb-1">Contact Number: {service.contactNumber}</p>
            <p className="mb-1">Email: {service.email}</p>
            <p className="mb-1">Type of Service: {service.type}</p>
            <p className="mb-1">Description: {service.description}</p>
            <p className="mb-1">Status: {service.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
