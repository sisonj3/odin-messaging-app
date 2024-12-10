const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();

const app = express();

// Router constants
const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");

// Header settings
app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');

    next();
});

// Set up passport session
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.session());

// Used for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/message", messageRouter);

app.listen(3000, () => console.log("App listening on port 3000!"));