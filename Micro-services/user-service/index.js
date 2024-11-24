const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect('mongodb://mongo-service:27017/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
