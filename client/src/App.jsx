import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home'; // ✅ New import

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
          <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          <Link to="/signup" style={{ margin: '0 10px' }}>Signup</Link>
          <Link to="/product/1" style={{ margin: '0 10px' }}>Product Details</Link>
          <Link to="/admin" style={{ margin: '0 10px' }}>Admin Dashboard</Link>
        </nav>

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Set Home as landing */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
