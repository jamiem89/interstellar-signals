const express = require('express');
const {
    getMessages,
    addNewMessage,
    deleteMessageById,
} = require('../controllers/userControllers');

const router = express.Router();

// Get all messages
router.get('/', getMessages);

// Create new message
router.post('/add', addNewMessage);

// Delete single message
router.delete('/delete/:messageId', deleteMessageById);

module.exports = router;