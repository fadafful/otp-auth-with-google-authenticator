const route = require('express').Router();
const { authenticator } = require('otplib');

// Verify the OTP token
const verifyOTP = (secret, token) => authenticator.verify({ secret, token });

route.post('/verify', (req, res) => {
    const { token, secret } = req.body;
    const isValid = verifyOTP(secret, token);
    console.log("Token: ", token, "secret: ", secret);
    res.render('result', { isValid });
});

module.exports = route;