const route = require('express').Router();
const { authenticator } = require('otplib');
const qrcode = require('qrcode');
const fs = require('fs');
const path = require('path');
// directory for the public folder
const publicDirectory = path.join(__dirname, 'public');

// Generate a secret key for the user
const generateSecret = () => authenticator.generateSecret();

// Generate a QR code for the user
const generateQRCode = async (secret, email = 'fadafful@gmail.com') => {
    try {
        const otpAuthUrl = authenticator.keyuri(email, 'Auth App', secret);
        const qrCode = await qrcode.toDataURL(otpAuthUrl);

        // save the image to the public folder
        //const qrCodePath = path.join(publicDirectory, 'qr-code.png');
        //const qrCodeBuffer = Buffer.from(qrCode.replace(/^data:image\/png;base64,/, ''), 'base64');


        console.log("QR Code: ", qrCode);

        return qrCode;
    } catch (error) {
        console.error(error);
        return null;
    }
};

route.get('/', async (req, res) => {
    const secret = generateSecret();
    //const token = authenticator.generate(secret);
    //console.log("Secret: ", secret);
    const qrCodeImage = await generateQRCode(secret);
    res.render('index', { secret, qrCodeImage });
});

module.exports = route;