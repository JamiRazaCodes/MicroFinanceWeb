import React, { useState } from "react";

const LoanCalculator = () => {
  const [loanDetails, setLoanDetails] = useState({
    category: "",
    subcategory: "",
    deposit: "",
    period: "",
  });

  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const subcategories = {
    Wedding: ["Valima", "Furniture", "Valima Food", "Jahez"],
    Home: ["Structure", "Finishing", "Loan"],
    Business: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    Education: ["University Fees", "Child Fees Loan"],
  };

  const calculateLoan = () => {
    const { deposit, period } = loanDetails;
    const maxLoan = 1000000;
    const loanAmount = maxLoan - parseFloat(deposit || 0);
    const monthlyInstallment = loanAmount / (parseInt(period || 1) * 12);
    setCalculatedLoan({ loanAmount, monthlyInstallment });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4 text-center">Loan Calculator</h1>
        <div className="space-y-4">
          {/* Loan Category Dropdown */}
          <select
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, category: e.target.value, subcategory: "" })
            }
            value={loanDetails.category}
            className="form-select w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Wedding">Wedding Loans</option>
            <option value="Home">Home Construction Loans</option>
            <option value="Business">Business Startup Loans</option>
            <option value="Education">Education Loans</option>
          </select>

          {/* Loan Subcategory Dropdown */}
          {loanDetails.category && (
            <select
              onChange={(e) =>
                setLoanDetails({ ...loanDetails, subcategory: e.target.value })
              }
              value={loanDetails.subcategory}
              className="form-select w-full border p-2 rounded"
            >
              <option value="">Select Subcategory</option>
              {subcategories[loanDetails.category].map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}

          {/* Input for Deposit */}
          <input
            type="number"
            placeholder="Initial Deposit (PKR)"
            value={loanDetails.deposit}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, deposit: e.target.value })
            }
            className="form-input w-full border p-2 rounded"
          />

          {/* Input for Loan Period */}
          <input
            type="number"
            placeholder="Loan Period (Years)"
            value={loanDetails.period}
            onChange={(e) =>
              setLoanDetails({ ...loanDetails, period: e.target.value })
            }
            className="form-input w-full border p-2 rounded"
          />

          {/* Calculate Button */}
          <button
            onClick={calculateLoan}
            className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600"
          >
            Calculate
          </button>
        </div>

        {/* Loan Breakdown Display */}
        {calculatedLoan && (
          <div className="mt-6 bg-gray-50 p-4 rounded shadow-sm">
            <h2 className="font-bold mb-2 text-center">Loan Breakdown</h2>
            <p>
              <strong>Category:</strong> {loanDetails.category}
            </p>
            <p>
              <strong>Subcategory:</strong> {loanDetails.subcategory}
            </p>
            <p>
              <strong>Total Loan Amount:</strong> PKR {calculatedLoan.loanAmount}
            </p>
            <p>
              <strong>Monthly Installment:</strong> PKR{" "}
              {calculatedLoan.monthlyInstallment.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
