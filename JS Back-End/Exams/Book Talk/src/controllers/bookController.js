const { createBook, getAllBooks, getBookDetails, addToWishlist, deleteBook, updateBook } = require('../managers/bookManager');
const { getErrorMessage } = require('../utils/errorHelpers');

const router = require('express').Router();

router.get('/catalog',async (req, res) => {
    const books =await getAllBooks().lean();
    res.render('books/catalog', {books})
})

router.get('/create', (req, res) => {
    res.render('books/create')
})

router.post('/create',async (req,res) => {

    const {title, author, genre, stars, image, bookReview} = req.body
    const bookData = {
        title, author, genre, stars, image, bookReview, owner: req.user._id
    }


    try{
        await createBook(bookData)
        res.redirect('/books/catalog')
    } catch(err){
        res.render('books/create', {error: getErrorMessage(err), title, author, genre, stars, image, bookReview})
    }
})

router.get('/:id/details',async (req, res) => {
    const bookId = req.params.id
    const userId = req.user?._id
    
    try{
        const book = await getBookDetails(bookId).lean()
        const isOwner = userId == book.owner
        const isGuest = !req.user;
        const hasWishedIt = () => {
            let hasWishedIt = false;
            if (userId){
                for (const wisher of book.wishingList) {
                    if (wisher == userId){
                        hasWishedIt = true;
                    }
                }
            }
            return hasWishedIt;
        }
        res.render('books/details', {book, isOwner, isGuest, hasWishedIt: hasWishedIt()})
    } catch(err){
        res.render('books/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/addToWishlist',async (req, res) => {
    const bookId = req.params.id;
    const userId = req.user._id;

    try{
        await addToWishlist(bookId, userId);
        res.redirect(`/books/${bookId}/details`)
    } catch(err){
        res.render('books/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/delete',async (req,res) => {
    const bookId = req.params.id;

    try{
        await deleteBook(bookId);
        res.redirect('/books/catalog')
    } catch (err){
        res.render('books/details', {error: getErrorMessage(err)})
    }
})

router.get('/:id/edit',async (req,res) => {
    const bookId = req.params.id;
    try{
        const book =await getBookDetails(bookId).lean();
        res.render('books/edit', {book});   
    } catch (err){
        res.render('books/details', {error: getErrorMessage(err)})
    }
})

router.post('/:id/edit',async (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;

    try{
        await updateBook(bookId, bookData);
        res.redirect(`/books/${req.params.id}/details`)
    } catch(err){
        res.render('books/details', {error: getErrorMessage(err)})
    }
})

module.exports = router;