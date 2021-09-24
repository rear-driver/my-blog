var express = require('express');
var router = express.Router();
const posts = require('../posts');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Best blog platform',
    posts: posts
  });
});

module.exports = router;