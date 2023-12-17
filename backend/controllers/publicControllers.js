const mongoose = require('mongoose');

const Message = require('../models/messageModel');

const getLatestMessages = async (req, res) => {
    const messages = await Message.find().limit(20)
    res.status(200).json(messages)
}

const postPublicMessage = async (req, res) => {
    const { message } = req.body;

    // add doc to messages collection
    try {
        const newMessage = await Message.create({message})
        res.status(200).json(newMessage);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getLatestMessages,
    postPublicMessage
}