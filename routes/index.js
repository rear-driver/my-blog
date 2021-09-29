const express = require('express');
const router = express.Router();
const Post = require('../models/post');

/* GET home page. */
router.get('/', async function (req, res) {
  var posts = await Post.find({});
  res.render('index', {
    title: 'Best blog platform',
    posts: posts
  });
});

module.exports = router;