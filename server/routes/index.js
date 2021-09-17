const express = require('express');
const router = express.Router();

const Post = require("../models/Post");

// GET posts
router.get('/', async (req, res)=>{
  const posts = await Post.find();
  res.send(posts);
})

// Add Posts
router.post('/', async (req, res)=>{
  let newPost;

  newPost = new Post({
    text: req.body.text,
    createdAt: new Date()
  })

  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  try {
    await newPost.save();
    res.status(201).send();
  } catch (error) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured! 🧨🧨",
        },
      },
    });
  }
})

// Deelete posts
router.delete("/:id", async (req, res)=>{
  const id = req.params.id;
  await Post.findByIdAndDelete({
    _id: id
  });
  res.status(200).send();
})

module.exports = router;