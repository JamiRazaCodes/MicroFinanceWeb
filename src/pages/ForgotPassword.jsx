import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate an API call for password reset
    setTimeout(() => {
      // You can integrate this with your backend service for real implementation
      setLoading(false);
      setMessage('If the email is registered, a password reset link has been sent.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Enter your email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your registered email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-gray-600 mt-4">
            {message}
          </p>
        )}

        {/* Redirect to Login */}
        <p className="text-center text-gray-600 mt-4">
          Remember your password?{' '}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
