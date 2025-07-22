// client/src/pages/AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Orders', value: 120 },
    { label: 'Total Products', value: 48 },
    { label: 'Users Registered', value: 25 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
