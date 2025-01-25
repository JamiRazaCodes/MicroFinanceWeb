import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import LoanCalculator from './components/Loancalculator';
import Register from './pages/Register';
import Login from './pages/Login';
import LoanForm from './components/LoanForm';
import AdminDashboard from './components/AdminDashboard';
import Overview from './pages/admin/Overview';
import Settings from './pages/admin/Settings';
import ManageUsers from './pages/admin/ManageUsers';
import ManageLoans from './pages/admin/ManageLoans';
import LoanApplications from './pages/admin/LoanApplications';
import UserDashboard from './components/UserDashboard';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<LoanCalculator />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword/>}/>

          {/* Protected Routes */}
          <Route path="/loan-form" element={<LoanForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/overview" element={<Overview />} />
            <Route path="/admin/manageusers" element={<ManageUsers />} />
            <Route path="/admin/manageloans" element={<ManageLoans />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/loans/:category" element={<LoanApplications />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
