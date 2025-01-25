import React, { useState } from "react";
import { Link } from "react-router";
import { UserCircle, Facebook, Twitter, Instagram } from "lucide-react";

const LandingPage = () => {
  // Mock user state (replace with actual authentication logic)
  const [user, setUser] = useState(null); // Set to an object like { name: "John Doe" } if user exists

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
          >
            Saylani
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-2">
                <UserCircle className="w-8 h-8 text-gray-600" />
                <span className="font-medium text-gray-700">{user.name}</span>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Register
                </Link>
              </>
            )}

            {/* Loan Calculator Button */}
            <Link
              to="/calculator"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Loan Calculator
            </Link>

            <Link
              to="/userdashboard"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              User Dashoard
            </Link>
          </div>
        </div>
      </nav>

      {/* Landing Page Content */}
      <div className="container mx-auto flex-grow p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Saylani Microfinance App
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Empowering communities with accessible and flexible financial solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { title: "Wedding Loans", max: "PKR 5 Lakh", category: "wedding" },
            { title: "Home Construction Loans", max: "PKR 10 Lakh", category: "home" },
            { title: "Business Startup Loans", max: "PKR 10 Lakh", category: "business" },
            { title: "Education Loans", max: "Based on Requirement", category: "education" },
          ].map((loan, index) => (
            <Link
              key={index}
              to={`/loan-form/`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <h2 className="text-xl font-bold mb-2 text-blue-600">{loan.title}</h2>
              <p className="text-gray-700 mb-4">Max Loan: {loan.max}</p>
              <span className="text-blue-500 font-medium hover:underline">
                Apply Now
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-6">
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">About Saylani</h2>
            <p className="text-sm">
              Saylani Microfinance App is dedicated to providing financial assistance to those in need, empowering individuals to achieve their dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-center py-4 text-sm">
          © 2025 Saylani Microfinance App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
