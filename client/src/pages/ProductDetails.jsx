// // client/src/pages/ProductDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { id } = useParams();

//   // Mock product data
//   const product = {
//     id,
//     name: 'Sample Product',
//     price: 1999,
//     description: 'This is a sample product description.',
//     image: '/placeholder.jpg',
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//       <img src={product.image} alt={product.name} className="w-64 mb-4" />
//       <p className="text-lg mb-2">₹{product.price}</p>
//       <p className="text-sm text-gray-600 mb-4">{product.description}</p>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const product = { id, name: 'Product ' + id, price: 9999 };

  const addToCart = () => {
    const newCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    alert('Added to cart!');
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
