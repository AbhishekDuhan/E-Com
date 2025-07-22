// // src/pages/Cart.jsx
// import React from 'react';

// const Cart = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
//       <p>No items in cart yet.</p>
//     </div>
//   );
// };

// export default Cart;


import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const updateQuantity = (index, qty) => {
    const updated = [...cart];
    updated[index].quantity = qty;
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => updateQuantity(i, Number(e.target.value))}
          />
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
