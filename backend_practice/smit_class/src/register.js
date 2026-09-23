const express = require('express');
const signup = require('./controllers/auth.controller/signup.post.controller');
const login = require('./controllers/auth.controller/login.post.controller');

const register = express();
register.use(express.json());

register.post('/register', signup)
register.post('/login', login)

module.exports = register;