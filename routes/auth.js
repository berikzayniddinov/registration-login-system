const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).send('Username already taken');
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('User registered successfully without hashing');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('User not found');
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).send('Invalid credentials');
        res.send('Login successful');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});
module.exports = router;