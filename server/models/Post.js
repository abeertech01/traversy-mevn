const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;