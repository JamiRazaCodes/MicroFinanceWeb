import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login Data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-gray-600 mt-4">
          Forgot your password?{' '}
          <a href="/forgot-password" className="text-blue-600 font-medium hover:underline">
            Reset it here
          </a>
        </p>

        {/* Redirect to Register */}
        <p className="text-center text-gray-600 mt-2">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 font-medium hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
