const userController = require("../controllers/userController");

const { Router } = require('express');

const userRouter = Router();

// Create user
userRouter.post("/", userController.createUser);

// Read all users
userRouter.get("/", userController.readUsers);

// Read user with username
userRouter.get("/:username", userController.readUserByUsername);

// Update user
userRouter.put("/:userId", userController.updateUser);

// Delete user
userRouter.delete("/", userController.deleteUser);

module.exports = userRouter;