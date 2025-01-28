// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './screens/Dashboard';
import ProductScreen from './screens/ProductScreen';
import UserScreen from './screens/UserScreen';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:uuid" element={<ProductScreen />} />
          <Route path="/user/:id" element={<UserScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
