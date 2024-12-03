const messageController = require('../controllers/messageController');
const jwtController = require('../controllers/jwtController');

const { Router } = require('express');

const messageRouter = Router();

// Create/send message
messageRouter.post("/", [jwtController.verifyToken, messageController.sendMessage]);

// Read all messages
messageRouter.get("/", [jwtController.verifyToken, messageController.readMessages]);

// Read sent messages by user
messageRouter.get("/sent", [jwtController.verifyToken, messageController.readSentMessages]);

// Read recieved messages by user
messageRouter.get("/recieved", [jwtController.verifyToken, messageController.readRecievedMessages]);

// Update message
messageRouter.put("/", [jwtController.verifyToken, messageController.updateMessage]);

// Delete message
messageRouter.delete("/", [jwtController.verifyToken, messageController.deleteMessage]);

module.exports = messageRouter;