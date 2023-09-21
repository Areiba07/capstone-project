import React, { useState } from 'react';
import '../assets/styles/index.css';

const UserList = () => {
  const initialUsers = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe123',
      email: 'john@example.com',
      status: 'active',
    },
    {
      id: 2,
      name: 'Alice Smith',
      username: 'alicesmith456',
      email: 'alice@example.com',
      status: 'active',
    },
    {
      id: 3,
      name: 'David Green',
      username: 'davidgreen789',
      email: 'david@example.com',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      username: 'sarahj123',
      email: 'sarah@example.com',
      status: 'active',
    },
    {
      id: 5,
      name: 'Emily Brown',
      username: 'emilybites',
      email: 'emily@example.com',
      status: 'active',
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleManageClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleStatusToggle = () => {
    // Implement logic to toggle user status (active/inactive)
    // Update the state accordingly
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes to user details
    // Update the state accordingly
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <input
        className="border border-gray-300 rounded-md p-2 w-full"
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="mt-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="flex items-center justify-between mb-2">
            <span>
              {user.name} - {user.username}
            </span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
              onClick={() => handleManageClick(user)}
            >
              Manage
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <div className="font-semibold mb-2">User Details:</div>
          <div>Name: {selectedUser.name}</div>
          <div>Username: {selectedUser.username}</div>
          <div>Email: {selectedUser.email}</div>
          <div className="mt-2">
            Status:{' '}
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedUser.status === 'active'}
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

export default UserList;
