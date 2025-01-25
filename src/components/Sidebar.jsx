// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/admin/overview" className="hover:text-blue-400">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/admin/manageusers" className="hover:text-blue-400">
            Manage Users
          </Link>
        </li>
        <li>
          <Link to="/admin/manageloans" className="hover:text-blue-400">
            Manage Loans
          </Link>
        </li>
        <li>
          <Link to="/admin/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
