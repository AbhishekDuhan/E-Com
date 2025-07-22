// client/src/App.jsx
import React from 'react'; // ✅ Add this
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

console.log("App component rendered");

function App() {
  return <h1>Hello, React is working!</h1>; // For testing only
}

export default App;
