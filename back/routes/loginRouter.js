const loginController = require("../controllers/loginController");
const jwtController = require('../controllers/jwtController');

const { Router } = require("express");

const loginRouter = Router();

loginRouter.post("/", [loginController.loginUser, jwtController.getJWT]);

module.exports = loginRouter;