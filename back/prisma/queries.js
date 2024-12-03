const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create user
async function createUser(name, pass) {
    await prisma.user.create({
        data: {
            username: name,
            password: pass,
        }
    });
};

// Read all users
async function getUsers() {
    const users = await prisma.user.findMany();

    return users;
};

// Read user with username
async function getUserByUsername(name) {
    const user = await prisma.user.findUnique({
        where: {
            username: name,
        },
        include: {
            recieved: true,
            sent: true,
        }
    });

    return user;
}

// Update user
async function updateUser(id, name, pass) {
    await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            username: name,
            password: pass,
        }
    });
}

// Delete user
async function deleteUser(name) {
    await prisma.user.delete({
        where: {
            username: name,
        }
    });
}

// Create/send message
async function createMessage(text, recieverId, senderId) {
    await prisma.message.create({
        data: {
            text: text,
            recieverId: recieverId,
            senderId: senderId,
        }
    });
}

// Read all messages
async function getMessages() {
    const messages = await prisma.message.findMany();

    return messages;
}

// Read sent messages by user
async function getSentMessages(senderId) {
    const messages = await prisma.message.findMany({
        where: {
            senderId: senderId,
        }
    });

    return messages;
}

// Read recieved messages by user
async function getRecievedMessages(recieverId) {
    const messages = await prisma.message.findMany({
        where: {
            recieverId: recieverId,
        }
    });

    return messages;
}

// Update message
async function updateMessage(senderId, msgId, text) {
    await prisma.message.update({
        where: {
            id: msgId,
            senderid: senderId,
        },
        data: {
            text: text,
        },
    });
}

// Delete message
async function deleteMessage(senderId, msgId) {
    await prisma.message.delete({
        where: {
            id: msgId,
            senderId: senderId,
        }
    });
}

module.exports = {
    createUser,
    getUsers,
    getUserByUsername,
    updateUser,
    deleteUser,
    createMessage,
    getMessages,
    getSentMessages,
    getRecievedMessages,
    updateMessage,
    deleteMessage,
}