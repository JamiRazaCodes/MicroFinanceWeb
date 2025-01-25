import React, { useState } from "react";
import { useParams } from "react-router";

const LoanApplications = () => {
  const { category } = useParams();
  const [applications, setApplications] = useState([
    {
      id: 1,
      subCategory: "Subcategory 1",
      initialDeposit: 5000,
      loanAmount: 50000,
      timePeriod: 24, // in months
    },
    {
      id: 2,
      subCategory: "Subcategory 2",
      initialDeposit: 10000,
      loanAmount: 100000,
      timePeriod: 36, // in months
    },
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [editingApplication, setEditingApplication] = useState(null);

  // Calculate Monthly Installments
  const calculateInstallments = (loanAmount, timePeriod) => {
    const monthlyInterestRate = 0.01; // 1% monthly interest
    return ((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -timePeriod))).toFixed(2);
  };

  // Approve Application
  const handleApprove = (id) => {
    alert(`Application #${id} approved.`);
    setApplications(applications.filter((app) => app.id !== id));
  };

  // Reject Application
  const handleReject = (id) => {
    alert(`Application #${id} rejected.`);
    setApplications(applications.filter((app) => app.id !== id));
  };

  // Handle Edit
  const handleEdit = (id) => {
    const app = applications.find((app) => app.id === id);
    setEditingApplication(app);
  };

  // Save Edited Application
  const handleSaveEdit = () => {
    setApplications((prev) =>
      prev.map((app) => (app.id === editingApplication.id ? editingApplication : app))
    );
    setEditingApplication(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{category} Applications</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.map((app) => (
          <li
            key={app.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedApplication(app)}
          >
            <h3 className="text-md font-bold">Application #{app.id}</h3>
            <p>Subcategory: {app.subCategory}</p>
            <p>Loan Amount: ${app.loanAmount}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleApprove(app.id);
                }}
                className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReject(app.id);
                }}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(app.id);
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {applications.length === 0 && <p className="text-gray-500 mt-6">No applications available.</p>}

      {/* Detailed View Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              Application #{selectedApplication.id} Details
            </h3>
            <p>Subcategory: {selectedApplication.subCategory}</p>
            <p>Initial Deposit: ${selectedApplication.initialDeposit}</p>
            <p>Loan Amount Needed: ${selectedApplication.loanAmount}</p>
            <p>Time Period: {selectedApplication.timePeriod} months</p>
            <p>
              Monthly Installments: $
              {calculateInstallments(
                selectedApplication.loanAmount,
                selectedApplication.timePeriod
              )}
            </p>
            <button
              onClick={() => setSelectedApplication(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingApplication && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              Edit Application #{editingApplication.id}
            </h3>
            <label className="block mb-2">
              Subcategory:
              <input
                type="text"
                value={editingApplication.subCategory}
                onChange={(e) =>
                  setEditingApplication({ ...editingApplication, subCategory: e.target.value })
                }
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2">
              Initial Deposit:
              <input
                type="number"
                value={editingApplication.initialDeposit}
                onChange={(e) =>
                  setEditingApplication({
                    ...editingApplication,
                    initialDeposit: parseFloat(e.target.value),
                  })
                }
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2">
              Loan Amount:
              <input
                type="number"
                value={editingApplication.loanAmount}
                onChange={(e) =>
                  setEditingApplication({
                    ...editingApplication,
                    loanAmount: parseFloat(e.target.value),
                  })
                }
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2">
              Time Period (months):
              <input
                type="number"
                value={editingApplication.timePeriod}
                onChange={(e) =>
                  setEditingApplication({
                    ...editingApplication,
                    timePeriod: parseInt(e.target.value),
                  })
                }
                className="border p-2 w-full rounded"
              />
            </label>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setEditingApplication(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
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

export default LoanApplications;
