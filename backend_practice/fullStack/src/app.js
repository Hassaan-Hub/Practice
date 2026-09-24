const express = require("express");
const register = require("./register/register");

const app = express();
app.use(express.json());

app.use('/api/', register)


module.exports = app;