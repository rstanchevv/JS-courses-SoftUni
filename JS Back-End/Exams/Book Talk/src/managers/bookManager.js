const Book = require('../models/Book')

exports.getAllBooks = () => Book.find();

exports.createBook = (bookData) => Book.create(bookData)

exports.getBookDetails = (bookId) => Book.findById(bookId)

exports.addToWishlist =async (bookId, userId) => {
    const book = await Book.findById(bookId);
    book.wishingList.push(userId);
    book.save()
}

exports.deleteBook = (bookId) => Book.findByIdAndDelete(bookId)

exports.updateBook = (bookId, bookData) => Book.findByIdAndUpdate(bookId, bookData)

exports.getWishingListByOwner = (userId) => Book.find({wishingList: userId});