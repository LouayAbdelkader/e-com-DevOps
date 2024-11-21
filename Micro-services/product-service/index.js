const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Allow requests from other origins (like frontend)
app.use(express.json());

// Connect to MongoDB (replace with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Get products route
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.post('/api/products', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    try {
        const newProduct = new Product({
            name,
            description,
            price,
            imageUrl,
        });

        await newProduct.save(); // Save product to the database
        res.status(201).json({ message: 'Product added successfully!', product: newProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to add product.' });
    }
});


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});




