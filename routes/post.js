var express = require('express');
var router = express.Router();
const posts = require('../posts');

router.get('/:slug', function (req, res, next) {
    for(i = 0; i < posts.length; i++)
    {
      if (posts[i].slug == req.params.slug)
      {
        res.render('post', {post: posts[i] });
        break;
      }
    }
  });

  module.exports = router;