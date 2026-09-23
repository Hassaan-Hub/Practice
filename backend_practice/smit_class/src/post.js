const express = require('express');
const createPost = require('./controllers/posts.controller/createPost.controller.js');
const multer = require('multer');

const post = express();
post.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })


post.post('/post', upload.single('image'), createPost)

module.exports = post;