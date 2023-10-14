const Post = require('../models/Post');

exports.createPost = (postData) => Post.create(postData)

exports.getPosts = () => Post.find()

exports.getPostDetails = (postId) => Post.findById(postId).populate('owner').populate('votes')

exports.deletePost = (postId) => Post.findOneAndDelete({_id: postId})

exports.voteForPost =async (userId, postId) => {
    const post =await Post.findById(postId);
    post.votes.push(userId);
    post.save();
}

exports.editPost = (postId, postData) => Post.findByIdAndUpdate(postId, postData)

exports.getOwnPosts = (ownerId) => Post.find({owner: ownerId}).populate('owner')