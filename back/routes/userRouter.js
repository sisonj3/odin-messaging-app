const userController = require("../controllers/userController");
const jwtController = require('../controllers/jwtController');

const { Router } = require('express');

const userRouter = Router();

// Create user
userRouter.post("/", userController.createUser);

// Read all users
userRouter.get("/", [jwtController.verifyToken, userController.readUsers]);

// Read user with username
userRouter.get("/:username", [jwtController.verifyToken, userController.readUserByUsername]);

// Update user
userRouter.put("/:userId", [jwtController.verifyToken, userController.updateUser]);

// Delete user
userRouter.delete("/", [jwtController.verifyToken, userController.deleteUser]);

module.exports = userRouter;