const mongoose = require('mongoose');

const getLatestMessages = (req, res) => {
    res.status(200).json({message: 'Fetching all messages'})
}

module.exports = {
    getLatestMessages
}