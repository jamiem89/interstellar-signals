require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');

const latestMessagesRoutes = require('./routes/latestMessagesRoutes');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
app.use(express.json())

// Public message routes
app.use('/api', latestMessagesRoutes);

// Protected User routes
app.use('/api/user', userRoutes);

// Public account routes
app.use('/api/account', accountRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })