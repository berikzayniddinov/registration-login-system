const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/auth', authRoutes);
app.use((req, res) => {
    res.status(404).send('Route not found');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});