import React, { useState } from 'react';
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css';

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

  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditClick = () => {
    setModalIsOpen(true);
  };

  const handleSaveClick = () => {
    // Save your data here
    setModalIsOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account Info</h1>
      <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
      <Modal isOpen={modalIsOpen}>
        <h2 className="text-xl font-bold mb-4">Edit Account Info</h2>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{key}:</label>
            <input name={key} value={value} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        ))}
        <button onClick={handleSaveClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </Modal>
      <div className="mt-8">
        {Object.entries(formData).map(([key, value]) => (
          <p key={key} className="mb-2">{`${key}: ${value}`}</p>
        ))}
      </div>
    </div>
  );
}
