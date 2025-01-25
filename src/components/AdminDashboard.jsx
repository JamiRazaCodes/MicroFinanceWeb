import React from "react";
import { Link } from "react-router";
import { BarChart, Users, Briefcase, Settings } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="bg-gray-100 text-gray-800 w-64 p-6 shadow">
        <h1 className="text-2xl font-bold mb-8 text-blue-600">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/overview"
                className="flex items-center gap-3 text-lg hover:bg-gray-200 p-3 rounded"
              >
                <BarChart className="w-6 h-6 text-blue-500" />
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manageusers"
                className="flex items-center gap-3 text-lg hover:bg-gray-200 p-3 rounded"
              >
                <Users className="w-6 h-6 text-blue-500" />
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manageloans"
                className="flex items-center gap-3 text-lg hover:bg-gray-200 p-3 rounded"
              >
                <Briefcase className="w-6 h-6 text-blue-500" />
                Manage Loans
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center gap-3 text-lg hover:bg-gray-200 p-3 rounded"
              >
                <Settings className="w-6 h-6 text-blue-500" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Total Users */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Total Users</h2>
            <p className="text-4xl font-bold text-blue-500">1,234</p>
          </div>

          {/* Card 2: Active Loans */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Active Loans</h2>
            <p className="text-4xl font-bold text-blue-500">567</p>
          </div>

          {/* Card 3: Revenue */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">Revenue (PKR)</h2>
            <p className="text-4xl font-bold text-blue-500">7,890,000</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow hover:shadow-lg p-4">
            <table className="w-full text-left text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 border-b">User</th>
                  <th className="p-4 border-b">Activity</th>
                  <th className="p-4 border-b">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b">John Doe</td>
                  <td className="p-4 border-b">Applied for a loan</td>
                  <td className="p-4 border-b">2025-01-25</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">Jane Smith</td>
                  <td className="p-4 border-b">Updated profile</td>
                  <td className="p-4 border-b">2025-01-24</td>
                </tr>
                <tr>
                  <td className="p-4 border-b">Ali Khan</td>
                  <td className="p-4 border-b">Submitted loan payment</td>
                  <td className="p-4 border-b">2025-01-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
