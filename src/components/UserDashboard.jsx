import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [loanStatus, setLoanStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching loan statuses from an API or database
  useEffect(() => {
    setTimeout(() => {
      // Mock loan data
      const mockData = [
        {
          id: 1,
          tokenNumber: '123456',
          amount: 'PKR 500,000',
          status: 'Approved',
          applicationDate: '2025-01-10',
          decisionDate: '2025-01-15',
        },
        {
          id: 2,
          tokenNumber: '789012',
          amount: 'PKR 300,000',
          status: 'Pending',
          applicationDate: '2025-01-18',
          decisionDate: 'N/A',
        },
      ];
      setLoanStatus(mockData);
      setLoading(false);
    }, 1500); // Simulate delay for fetching data
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      {loading ? (
        <div className="text-center text-gray-500">Loading your loan status...</div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Your Loan Applications</h2>
          {loanStatus.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">Token Number</th>
                  <th className="border border-gray-300 p-2">Amount</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Application Date</th>
                  <th className="border border-gray-300 p-2">Decision Date</th>
                </tr>
              </thead>
              <tbody>
                {loanStatus.map((loan) => (
                  <tr key={loan.id} className="text-center">
                    <td className="border border-gray-300 p-2">{loan.tokenNumber}</td>
                    <td className="border border-gray-300 p-2">{loan.amount}</td>
                    <td
                      className={`border border-gray-300 p-2 font-bold ${
                        loan.status === 'Approved'
                          ? 'text-green-600'
                          : loan.status === 'Pending'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {loan.status}
                    </td>
                    <td className="border border-gray-300 p-2">{loan.applicationDate}</td>
                    <td className="border border-gray-300 p-2">{loan.decisionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-gray-500">You have no loan applications.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
