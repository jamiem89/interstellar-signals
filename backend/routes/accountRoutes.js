const express = require('express');
const {
    signup,
    login
} = require('../controllers/accountControllers');

const router = express.Router();

// Get all messages
router.get('/signup', signup);

// Delete single message
router.get('/login', login);

module.exports = router;