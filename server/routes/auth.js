const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'farmerBuyer'; // Use environment variable

// Register a new user
router.post('/register', async (req, res) => {
    const { name, phoneNo, password, state, district } = req.body;

    try {
        const userExists = await User.findOne({ phoneNo });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, phoneNo, password, state, district });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, phoneNo: newUser.phoneNo }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                phoneNo: newUser.phoneNo,
                state: newUser.state,
                district: newUser.district
            }
        });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});

// Login user and get token
router.post('/login', async (req, res) => {
    const { phoneNo, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ phoneNo });
        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        // Verify password (plain text comparison)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, phoneNo: user.phoneNo }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                phoneNo: user.phoneNo,
                state: user.state,
                district: user.district
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
