const query = require('../prisma/queries');

// Create/send message
const sendMessage = async (req, res) => {
    await query.createMessage(req.body.text, Number(req.body.recieverId), Number(req.body.senderId));

    return res.send('POST: Message sent!');
}
// Read all messages
const readMessages = async (req, res) => {
    const messages = await query.getMessages();

    return res.json(messages);
}

// Read sent messages by user
const readSentMessages = async (req, res) => {
    const messages = await query.getSentMessages(Number(req.body.senderId));

    return res.json(messages);
}

// Read recieved messages by user
const readRecievedMessages = async (req, res) => {
    const messages = await query.getRecievedMessages(Number(req.body.recieverId));

    return res.json(messages);
}

// Update message
const updateMessage = async (req, res) => {
    await query.updateMessage(Number(req.body.senderId), Number(req.body.msgId), text);

    return res.send('PUT: Message updated!');
}

// Delete message
const deleteMessage = async (req, res) => {
    await query.deleteMessage(Number(req.body.senderId), Number(req.body.msgId));

    return res.send('DELETE: Message deleted!');
}

module.exports = {
    sendMessage,
    readMessages,
    readSentMessages,
    readRecievedMessages,
    updateMessage,
    deleteMessage,
}