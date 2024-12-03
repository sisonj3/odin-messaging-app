const query = require('../prisma/queries');
const jwt = require('jsonwebtoken');

// Create/send message
const sendMessage = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.createMessage(req.body.text, Number(req.body.recieverId), Number(req.body.senderId));

            return res.send('POST: Message sent!');
        }
    });
}

// Read all messages
const readMessages = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const messages = await query.getMessages();

            return res.json(messages);
        }
    });
    
}

// Read sent messages by user
const readSentMessages = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const messages = await query.getSentMessages(Number(req.body.senderId));

            return res.json(messages);
        }
    });
    
}

// Read recieved messages by user
const readRecievedMessages = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const messages = await query.getRecievedMessages(Number(req.body.recieverId));

            return res.json(messages);
        }
    });
    
}

// Update message
const updateMessage = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateMessage(Number(req.body.senderId), Number(req.body.msgId), text);

            return res.send('PUT: Message updated!');
        }
    });
    
}

// Delete message
const deleteMessage = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.deleteMessage(Number(req.body.senderId), Number(req.body.msgId));

            return res.send('DELETE: Message deleted!');
        }
    });
    
}

module.exports = {
    sendMessage,
    readMessages,
    readSentMessages,
    readRecievedMessages,
    updateMessage,
    deleteMessage,
}