const express = require('express');
const {
    getLatestMessages,
} = require('../controllers/latestMessagesControllers');

const router = express.Router();

// Get all messages
router.get('/', getLatestMessages);

module.exports = router;