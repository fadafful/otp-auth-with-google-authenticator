# otp-auth-with-google-authenticator
In this project, you'll practice using otplib to do 2FA Authentication with QrCode and Google Authenticator

# about otplib
otplib is a JavaScript One Time Password (OTP) library for OTP generation and verification.

It implements both HOTP - RFC 4226 and TOTP - RFC 6238, and are tested against the test vectors provided in their respective RFC specifications. These datasets can be found in the tests/data folder.

RFC 4226 Dataset
RFC 6238 Dataset
This library is also compatible with Google Authenticator, and includes additional methods to allow you to work with Google Authenticator.

# Where to get otplib
https://www.npmjs.com/package/otplib

# or simply type use npm
npm install otplib --save

# you can use any js frontend framework library you like, in this I'm simply using plain HTML & CSS
Let's get started:
1. npm init -y
2. npm install express ejs
3. npm install otplib --save
4. create your app.js
5. Also added a bit of Playwright for testing of a heading, link and title