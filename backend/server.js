require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');

const publicRoutes = require('./routes/publicRoutes');

const app = express();
app.use(express.json())

// Public message routes
app.use('/api', publicRoutes);

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