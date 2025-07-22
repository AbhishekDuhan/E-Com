// src/pages/ProductList.jsx
import React from 'react';

const ProductList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sample product placeholder */}
        <div className="border p-4 rounded shadow">
          <h3 className="font-bold">Product Name</h3>
          <p>$99.99</p>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
