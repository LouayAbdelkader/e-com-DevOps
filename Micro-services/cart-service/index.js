const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo-service:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [{
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
  }]
});

// Cart Model
const Cart = mongoose.model('Cart', cartSchema);

// API Routes

// Add product to cart
app.post('/api/cart/add', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find cart for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create new cart if it doesn't exist
      cart = new Cart({ userId, products: [] });
    }

    // Check if the product is already in the cart
    const existingProduct = cart.products.find(p => p.productId === productId);
    if (existingProduct) {
      // If product exists, update the quantity
      existingProduct.quantity += quantity;
    } else {
      // Otherwise, add the product
      cart.products.push({ productId, quantity });
    }

    // Save cart
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Remove product from cart
app.post('/api/cart/remove', async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Find cart for the user
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove product from the cart
    cart.products = cart.products.filter(p => p.productId !== productId);

    // Save updated cart
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get cart items for a user
app.get('/api/cart/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Find cart for the user
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start the server
const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Cart service running on port ${PORT}`);
});
