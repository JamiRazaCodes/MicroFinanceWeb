import React, { useState } from 'react';
import SlipGeneration from './SlipGeneration';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanDetails: {
      loanCategory: '',
      loanSubcategory: '',
      loanAmount: '',
    },
    guarantor1: {
      name: '',
      email: '',
      cnic: '',
    },
    guarantor2: {
      name: '',
      email: '',
      cnic: '',
    },
    personalInfo: {
      name: '',
      email: '',
      cnic: '',
      phone: '',
      address: '',
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const subcategories = {
    Wedding: ['Dowry Expenses', 'Venue Booking', 'Other'],
    'Home Construction': ['Materials', 'Labor', 'Furnishings'],
    'Business Startup': ['Equipment', 'Marketing', 'Initial Inventory'],
    Education: ['Tuition', 'Books & Supplies', 'Accommodation'],
  };

  const handleInputChange = (e, section, field) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true); // Set form as submitted
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      {!isSubmitted ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Loan Request</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Loan Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Loan Details</h2>
              <select
                required
                onChange={(e) => handleInputChange(e, 'loanDetails', 'loanCategory')}
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Wedding">Wedding Loans</option>
                <option value="Home Construction">Home Construction Loans</option>
                <option value="Business Startup">Business Startup Loans</option>
                <option value="Education">Education Loans</option>
              </select>

              {formData.loanDetails.loanCategory && (
                <select
                  required
                  onChange={(e) => handleInputChange(e, 'loanDetails', 'loanSubcategory')}
                  className="mt-2 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Subcategory</option>
                  {subcategories[formData.loanDetails.loanCategory].map((subcategory, index) => (
                    <option key={index} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              )}

              <input
                type="number"
                placeholder="Loan Amount (PKR)"
                className="mt-2 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'loanDetails', 'loanAmount')}
              />
            </div>

            {/* Guarantor Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Guarantor Info</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Guarantor 1 */}
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Guarantor 1</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor1', 'name')}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor1', 'email')}
                  />
                  <input
                    type="text"
                    placeholder="CNIC"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor1', 'cnic')}
                  />
                </div>

                {/* Guarantor 2 */}
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Guarantor 2</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor2', 'name')}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor2', 'email')}
                  />
                  <input
                    type="text"
                    placeholder="CNIC"
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleInputChange(e, 'guarantor2', 'cnic')}
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Personal Info</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'personalInfo', 'name')}
              />
              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'personalInfo', 'email')}
              />
              <input
                type="text"
                placeholder="CNIC"
                className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'personalInfo', 'cnic')}
              />
              <input
                type="text"
                placeholder="Phone"
                className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'personalInfo', 'phone')}
              />
              <textarea
                placeholder="Address"
                className="mt-1 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleInputChange(e, 'personalInfo', 'address')}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <SlipGeneration formData={formData} />
      )}
    </div>
  );
};

export default LoanForm;
