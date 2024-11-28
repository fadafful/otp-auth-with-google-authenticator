const express = require('express');
const { authenticator } = require('otplib');

const app = express();

const publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

const router = express.Router();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const authRoute = require('./routes/authRoute');
app.use('/', authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });