const { createPost, getPosts, getPostDetails, deletePost, editPost, voteForPost } = require('../managers/postsManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const {isAuth} = require('../middlewares/authMiddleware')

const router = require('express').Router();

router.get('/catalog',async (req, res) => {
    try{
        const posts =await getPosts().lean();
        res.render('posts/all-posts', {posts})
    } catch(err){
        res.render('posts/all-posts', {error: 'Posts cannot be displayed!'})
    }
})

router.get('/create',isAuth, (req, res) => {
    res.render('posts/create')
})

router.post('/create',isAuth, async (req,res) => {
    try {
        const postData = {
            ...req.body,
            owner: req.user._id
        }
        await createPost(postData);
        res.redirect('/posts/catalog')
    } catch(err){
        console.log(err)
        res.render('posts/create', {error: getErrorMessage(err)})
    }
})

router.get('/details/:id',async (req, res) => {
    try{
        const post = await getPostDetails(req.params.id).lean();
        const voters = [];
        post.votes.forEach(user => {
            voters.push(user.email)
        }) 
        const isOwner = req.user?._id == post.owner._id;
        const isGuest = !req.user
        function hasVoted(){
            let hasVoted = false;;
            for (const user of post.votes) {
                if (user._id == req.user?._id){
                    hasVoted = true;
                }
            }
            return hasVoted;
        }
        res.render('posts/details', {post, isOwner, hasVoted: hasVoted(), isGuest, numberOfVotes: post.votes.length, votesNotEmpty: post.votes.length > 0, voters: voters.join(', ')})
    } catch(err){
        res.render('posts/all-posts', {error: 'Unable to get details of the this post.'})
    }
})

router.get('/details/:id/delete', isAuth, async (req, res) => {
    try{
        await deletePost(req.params.id)
        res.redirect('/posts/catalog')
    } catch(err){
        res.render('posts/details', {error: `Unable to delete this post due to ${err.message}`})
    }
})

router.get('/details/:id/vote',isAuth, async (req, res) => {
    try{
        await voteForPost(req.user._id, req.params.id);
        res.redirect(`/posts/details/${req.params.id}`)
    } catch(err){
        res.render('posts/details', {error: getErrorMessage(err)})
    }
})

router.get('/details/:id/edit',isAuth, async (req,res) => {
    try{
        const post =await getPostDetails(req.params.id).lean();
        
        res.render('posts/edit', {post})
    } catch(err){
        res.render('posts/edit', {error: getErrorMessage(err)})
    }
})

router.post('/details/:id/edit', isAuth, async (req, res) => {
    try{
        await editPost(req.params.id, req.body)
        res.redirect(`/posts/details/${req.params.id}`)
    } catch(err){
        res.render('posts/edit', {error: getErrorMessage(err)})
    }
})



module.exports = router;