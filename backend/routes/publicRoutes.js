const express = require('express');
const {
    getLatestMessages,
    postPublicMessage
} = require('../controllers/publicControllers');

const router = express.Router();

// Get all messages
router.get('/', getLatestMessages);

// Public post message
router.post('/', postPublicMessage)

module.exports = router;