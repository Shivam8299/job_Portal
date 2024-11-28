const express = require('express');
const cookieParser = require('cookie-parser');
const connectDb = require('./utils/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    credentials: true 
};
app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the web page');
});


 
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
