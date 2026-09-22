const express = require('express');
const signup = require('./controllers/signup.post.controller');

const register = express();
register.use(express.json());

register.post('/register', signup)

module.exports = register;