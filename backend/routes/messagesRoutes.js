const express = require('express');
const {
    getMessages,
    getMessagesByUser,
    getMessageById
} = require('../controllers/messagesControllers');

const router = express.Router();

// Get all messages
router.get('/', getMessages);

// Get single message
router.get('/:id', getMessageById);

// Get all messages for user
router.get('/user/:userId', getMessagesByUser);


module.exports = router;