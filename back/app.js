const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();

const app = express();

// Router constants
const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");

// Set up passport session
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.session());

// Used for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/login", loginRouter);
app.use("/user", userRouter);

app.listen(3000, () => console.log("App listening on port 3000!"));