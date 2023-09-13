const express = require('express');
const api = express.Router();
const users = require('../../routes/users');
// const posts = require('../../routes/post');
// const books = require('../../routes/book')

api.get('/', (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'Welcome to My Posts App API',
  })
);

api.use('/users', users);
// api.use('/posts', posts);

module.exports = api;
