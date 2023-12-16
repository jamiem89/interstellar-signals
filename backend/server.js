require('dotenv').config()
const express = require('express')
const messagesRoutes = require('./routes/messagesRoutes');

const app = express();

// routes
app.use('/api/messages', messagesRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening');
})