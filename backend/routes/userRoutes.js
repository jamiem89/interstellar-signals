const express = require('express');
const {
    getMessages,
    deleteMessageById,
} = require('../controllers/messagesControllers');

const router = express.Router();

// Get all messages
router.get('/', getMessages);

// Delete single message
router.delete('/delete/:messageId', deleteMessageById);

module.exports = router;