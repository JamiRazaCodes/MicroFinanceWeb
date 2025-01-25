// src/pages/admin/Overview.jsx
import React from "react";

const Overview = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Users", value: 120 },
          { title: "Active Loans", value: 75 },
          { title: "Pending Approvals", value: 10 },
          { title: "Revenue (PKR)", value: "1.5M" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-semibold text-blue-500">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
