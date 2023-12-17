const mongoose = require('mongoose');

const signup = (req, res) => {
    res.status(200).json({message: 'Signing up new user'})
}

const login = (req, res) => {
    res.status(200).json({message: `You are now signed in`});
}

module.exports = {
    signup,
    login
}