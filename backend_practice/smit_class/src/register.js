const express = require('express');
const signup = require('./controllers/signup.post.controller');
const login = require('./controllers/login.post.controller');

const register = express();
register.use(express.json());

register.post('/register', signup)
register.post('/login', login)

module.exports = register;