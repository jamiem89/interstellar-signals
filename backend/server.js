require('dotenv').config()
const express = require('express')
const latestMessagesRoutes = require('./routes/latestMessagesRoutes');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

// Public message routes
app.use('/api', latestMessagesRoutes);

// Protected User routes
app.use('/api/user', userRoutes);

// Public account routes
app.use('/api/account', accountRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening');
})