import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button style={styles.btn}>View Details</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  btn: {
    marginTop: '10px',
    padding: '0.5rem 1rem',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductCard;
