const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

// Get JSON Web Token
const getJWT = (req, res) => {
    // Get user back w/ req.user

    // Get jsonwebtoken
    jwt.sign({ user: req.user }, process.env.SECRET, { expiresIn: '12h' }, (err, token) => {
        res.json({
            token: token,
            id: req.user.id,
            username: req.user.username,
            recieved: req.user.recieved,
            sent: req.user.sent,
        }); 
    });
};

// Verify JSON Web Token
const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['Authorization'];

    // Check if bearer is undefined
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');

        // Get token from arrray
        const bearerToken = bearer[1];

        // Set the token
        req.token = bearerToken;

        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
};

module.exports = {
    getJWT,
    verifyToken,
};