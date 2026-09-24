require('dotenv').config();

const express = require('express');
const connectDB = require('./src/db/db');
const app = require('./src/app');
const server = express();

connectDB()

server.use('/', app)

server.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})