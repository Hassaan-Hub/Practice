require('dotenv').config();

const express = require('express');
const connectDB = require('./src/db/db');
const app = express();

connectDB()


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})