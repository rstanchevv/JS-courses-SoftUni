const Post = require('../models/Post');

exports.createPost = (postData) => Post.create(postData)

exports.getPosts = () => Post.find()

exports.getPostDetails = (postId) => Post.findById(postId).populate('owner')