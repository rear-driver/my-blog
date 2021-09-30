const express = require('express');
const cors = require('cors');
const router = express.Router();
const Post = require('../models/post');


router.use(cors());
router.use(express.json());

router.get('/', async function (req, res) {
  let posts = await Post.find({});
  res.json(posts);
});

router.get('/:slug', async function (req, res) {
  let post = await Post.findOne().byUri(req.params.slug.toLocaleLowerCase()).exec();
  if (post) {
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', async function (req, res) {
  console.log(req.body);
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

  res.sendStatus(200);
});

module.exports = router;