import React, { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "User 1", email: "user1@example.com", password: "User 1@1234" },
    { id: 2, name: "User 2", email: "user2@example.com", password: "User 2@1234" },
    { id: 3, name: "User 3", email: "user3@example.com", password: "User 3@1234" },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Generate password based on name
  const generatePassword = (name) => {
    return `${name}@1234`;
  };

  // Add User
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newId = users.length ? users[users.length - 1].id + 1 : 1;
      const password = generatePassword(newUser.name);
      setUsers([...users, { id: newId, ...newUser, password }]);
      setNewUser({ name: "", email: "" });
    }
  };

  // Edit User
  const handleEditUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id ? { ...editingUser, password: generatePassword(editingUser.name) } : user
      )
    );
    setEditingUser(null);
  };

  // Delete User
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      {/* Add User Form */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Add New User</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Users Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Password</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.password}</td>
              <td className="border p-2">
                <button
                  onClick={() => setEditingUser(user)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Edit User</h3>
            <input
              type="text"
              placeholder="Name"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              className="border p-2 rounded w-full mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingUser(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditUser}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
