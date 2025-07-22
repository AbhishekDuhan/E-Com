import React from 'react';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  { id: 1, name: 'Phone', price: 29999 },
  { id: 2, name: 'Laptop', price: 75999 },
  { id: 3, name: 'Headphones', price: 1999 },
  { id: 4, name: 'Smartwatch', price: 4999 },
];

export default function Home() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
