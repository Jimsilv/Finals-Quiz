import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/actions/authActions"; // ✅ Ensure this action exists
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";
import ProductScreen from "./screens/ProductScreen";
import UserScreen from "./screens/UserScreen";
import LoginScreen from "./screens/LoginScreen";
import Spinner from "./components/Spinner"; // ✅ Loader Component

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { userInfo, loading } = useSelector((state) => state.auth);

  if (loading) return <Spinner />; // ✅ Show loader while checking authentication
  return userInfo ? children : <Navigate to="/login" />;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth()); // ✅ Check authentication on app load
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginScreen />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/product/:uuid" element={<ProtectedRoute><ProductScreen /></ProtectedRoute>} />
          <Route path="/user/:id" element={<ProtectedRoute><UserScreen /></ProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
