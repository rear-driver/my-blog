const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    slug: String,
    content: String
});

postSchema.query.byUri = function (slug) {
    return this.where({ slug: new RegExp(slug, 'i') });
};

const model = mongoose.model('Post', postSchema);

module.exports = model;