const mongoose = require('mongoose')

const Schema = mongoose.Schema

const publicMessageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  id: {
    type: String,
    require: true
  }
}, { timestamps: true })

module.exports = mongoose.model('PublicMessage', publicMessageSchema)