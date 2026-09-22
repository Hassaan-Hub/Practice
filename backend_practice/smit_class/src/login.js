const express = require('express');
const signup = require('./controllers/signup.post.controller');

const login = express();
login.use(express.json());

login.post('/login', login)

module.exports = login;