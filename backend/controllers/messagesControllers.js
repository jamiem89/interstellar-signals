const mongoose = require('mongoose');

const getMessages = (req, res) => {
    res.status(200).json({message: 'Fetching all messages for logged in user'})
}

const deleteMessageById = (req, res) => {
    const { messageId } = req.params;
    console.log(req.params)
    res.status(200).json({message: `Deleting message: ${messageId}`});
}

module.exports = {
    getMessages,
    deleteMessageById
}