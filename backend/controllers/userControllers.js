const mongoose = require('mongoose');

const PublicMessage = require('../models/publicMessageModel')
const Message = require('../models/messageModel');

const getMessages = (req, res) => {
    res.status(200).json({message: 'Fetching all messages for logged in user'})
}

const addNewMessage = async (req, res) => {
    const { message, user_id, public } = req.body;
    // add doc to messages collection
    try {
        const newMessage = await Message.create({message, user_id})
        // if public, also add to public messages colleciton
        if(public) {
            const newPublicMessage = await PublicMessage.create({message: newMessage.message, id: newMessage._id})
        }
        res.status(200).json(newMessage);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteMessageById = (req, res) => {
    const { messageId } = req.params;
    console.log(req.params)
    res.status(200).json({message: `Deleting message: ${messageId}`});
}

module.exports = {
    getMessages,
    addNewMessage,
    deleteMessageById
}