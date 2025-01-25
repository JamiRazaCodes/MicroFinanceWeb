import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Automatically generate password based on the first 4 letters of the name
    const generatedPassword = formData.name.slice(0, 4) + '@1234';

    setFormData({
      ...formData,
      password: generatedPassword,
      confirmPassword: generatedPassword, // Ensure confirmPassword matches
    });

    // Add your registration logic here
    console.log('Form Submitted', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* CNIC Field */}
          <div>
            <label htmlFor="cnic" className="block text-gray-700 font-medium">
              CNIC
            </label>
            <input
              id="cnic"
              name="cnic"
              type="text"
              value={formData.cnic}
              onChange={handleInputChange}
              placeholder="Enter your CNIC"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="string"
              value={formData.password}
              readOnly
              placeholder="Password will be generated"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="string"
              value={formData.confirmPassword}
              readOnly
              placeholder="Password will be generated"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
