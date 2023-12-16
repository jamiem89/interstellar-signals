const mongoose = require('mongoose');

const getMessages = (req, res) => {
    res.status(200).json({message: 'Fethcing all messages'})
}

const getMessagesByUser = (req, res) => {
    const { userId } = req.params;
    res.status(200).json({userId});
}

const getMessageById = (req, res)  => {
    const { id } = req.params;
    res.status(200).json({messageId: id});
}

module.exports = {
    getMessages,
    getMessagesByUser,
    getMessageById
}