const query = require('../prisma/queries');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dotenv = require("dotenv").config();

const checkUser = (req, res) => {
    if (req.user) {
        console.log(req.user);
        return res.send(`${req.user.username} logged in!`);
    } else {
        return res.send("No user logged in!");
    }
}

// Set up LocalStrategy
passport.use(new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
    try {
        const user = await query.getUserByUsername(username);

        // Clear messages
        req.session.messages = undefined;

        // Check if user exists
        if (!user) {
            return done(null, false, { message: "Username does not exist!" });
        }

        // Use bcrypt.compare to validate password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

// Serialization and Deserialization
passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
    try {
        const user = await query.getUserByUsername(username);

        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Authenticate
const loginUser = passport.authenticate("local", {
    failureMessage: true,
});

module.exports = {
    checkUser,
    loginUser,
}