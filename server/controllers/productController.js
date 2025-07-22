// server/controllers/productController.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

exports.seedProducts = async (req, res) => {
  const sampleProducts = [
    {
      title: "Wireless Headphones",
      description: "Noise cancelling over-ear headphones",
      price: 129.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Smartwatch",
      description: "Water-resistant fitness tracker",
      price: 89.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with rich bass",
      price: 49.99,
      image: "https://via.placeholder.com/150"
    }
  ];
  try {
    await Product.insertMany(sampleProducts);
    res.status(201).json({ message: 'Sample products added' });
  } catch (err) {
    res.status(500).json({ message: 'Seeding failed' });
  }
};
