// src/pages/Home.jsx
// import React from 'react';

// const Home = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
//       <p>Explore our products and shop your favorites!</p>
//     </div>
//   );
// };

// export default Home;

import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Phone', price: 29999 },
  { id: 2, name: 'Laptop', price: 75999 },
];

export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
