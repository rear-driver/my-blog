const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/create', function (req, res) {
  res.render('posts/create', {title: "Add new post"});
});

router.get('/:slug', async function (req, res) {
  let post = await Post.findOne().byUri(req.params.slug.toLocaleLowerCase()).exec();
  res.render('posts/show', {title: post.title, post: post});
});

router.post('/create', async function (req, res) {
  let title = req.body.title;
  let content = req.body.content;
  let slug = title.replace(/\s+/g, '-').toLowerCase();

  var exist_posts = await Post.find().byUri(slug).exec();
  if (exist_posts.length != 0)
  {
    slug = slug + '-' + (exist_posts.length + 1);
  }

  const post = new Post({title: title, slug: slug, content: content});
  await post.save();

  res.redirect('/');
});

module.exports = router;