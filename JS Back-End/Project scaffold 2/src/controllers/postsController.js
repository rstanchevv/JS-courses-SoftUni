const { createPost, getPosts, getPostDetails } = require('../managers/postsManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const router = require('express').Router();

router.get('/catalog',async (req, res) => {
    try{
        const posts =await getPosts().lean();
        res.render('posts/all-posts', {posts})
    } catch(err){
        res.render('posts/all-posts', {error: 'Posts cannot be displayed!'})
    }
})

router.get('/create', (req, res) => {
    res.render('posts/create')
})

router.post('/create',async (req,res) => {
    try {
        const postData = {
            ...req.body,
            owner: req.user._id
        }
        await createPost(postData);
        res.render('posts/all-posts')
    } catch(err){
        res.render('posts/create', {error: getErrorMessage(err)})
    }
})

router.get('/details/:id',async (req, res) => {
    const post = await getPostDetails(req.params.id).lean()
    const isOwner = req.user?._id == post.owner._id;
    const isGuest = !req.user
    const hasVoted = false;
    const isAuthenticatedAndNotVoted = req.user && hasVoted == false;
    console.log(isAuthenticatedAndNotVoted)
    
    console.log(isOwner)
    res.render('posts/details', {post, isOwner, isAuthenticatedAndNotVoted, isGuest})
})



module.exports = router;