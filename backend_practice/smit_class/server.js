require('dotenv').config()

const express = require('express');
const connectDB = require('./db/db');
const register = require('./src/register');
const post = require('./src/post');

const app = express()
connectDB();

app.use('/', register)
app.use('/', post)

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is runing on port ${process.env.PORT || 3000}`);
})