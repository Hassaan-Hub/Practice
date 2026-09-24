const express = require("express");
const { register } = require("../controllers/signup/signup.post.controller")

const register = express.Router();

register.post('/register', register)


module.exports = register;