import React from "react";
import { useNavigate } from "react-router";

const ManageLoans = () => {
  const navigate = useNavigate();

  const loanCategories = [
    { id: 1, name: "Wedding Loan Applications", route: "/loans/wedding" },
    { id: 2, name: "Home Construction Loan Applications", route: "/loans/home" },
    { id: 3, name: "Business Startup Loan Applications", route: "/loans/business" },
    { id: 4, name: "Education Loan Applications", route: "/loans/education" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Loans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loanCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => navigate(category.route)}
          >
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageLoans;
