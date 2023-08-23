import React, { useState } from "react";

export default function AccountInfo() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    address: "",
    region: "",
    city: "",
    province: "",
    barangay: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [savedData, setSavedData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setShowConfirmation(true);
  };

  const confirmSave = () => {
    setSavedData([formData, ...savedData]);
    setFormData({ ...initialFormData });
    setShowConfirmation(false);
  };

  const cancelSave = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Account Information</h1>
      <div className="flex flex-col">
        <label className="mb-2">Email</label>
        <input
          type="email"
          className="border p-2 rounded-md mb-4"
          placeholder="thisaccemail@gmail.com"
          disabled
        />
        <label className="mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="First name"
        />
        <label className="mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Last name"
        />
        <label className="mb-2">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Contact number"
        />
        <label className="mb-2">Home Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Home Address"
        />
        <label className="mb-2">Region</label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Region"
        />
        <label className="mb-2">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="City"
        />
        <label className="mb-2">Province</label>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Province"
        />
        <label className="mb-2">Barangay</label>
        <input
          type="text"
          name="barangay"
          value={formData.barangay}
          onChange={handleInputChange}
          className="border p-2 rounded-md mb-4"
          placeholder="Barangay"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to save the data?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={confirmSave}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={cancelSave}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
