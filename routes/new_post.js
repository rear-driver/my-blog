const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('newPost', {title: "Add your post"});
});

module.exports = router;