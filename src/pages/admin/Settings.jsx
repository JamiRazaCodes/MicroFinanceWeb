import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({
    username: "Admin",
    email: "admin@example.com",
    password: "",
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4"
      >
        {/* Profile Information */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Password Update */}
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Leave blank to keep current password"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleInputChange}
            className="w-4 h-4 mr-2"
          />
          <label className="text-sm">Enable Email Notifications</label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
