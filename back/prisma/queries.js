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

module.exports = {
    createUser,
    getUsers,
    getUserByUsername,
    updateUser,
    deleteUser,
}