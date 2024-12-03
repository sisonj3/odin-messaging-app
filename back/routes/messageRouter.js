const messageController = require('../controllers/messageController');

const { Router } = require('express');

const messageRouter = Router();

// Create/send message
messageRouter.post("/", messageController.sendMessage);

// Read all messages
messageRouter.get("/", messageController.readMessages);

// Read sent messages by user
messageRouter.get("/sent", messageController.readSentMessages);

// Read recieved messages by user
messageRouter.get("/recieved", messageController.readRecievedMessages);

// Update message
messageRouter.put("/", messageController.updateMessage);

// Delete message
messageRouter.delete("/", messageController.deleteMessage);

module.exports = messageRouter;