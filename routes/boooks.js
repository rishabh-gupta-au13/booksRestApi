const express = require("express");
const router = express.Router();
const Book = require('../models/books')

// POST: CREATE A NEW BOOK
router.post('/', (req, res) => {
    book = new Book({
        name: req.body.bookName,
        author: {
            name: req.body.authorName,
            age: req.body.authorAge,

        },
        genre: req.body.genre
    });
    book.save().then(book => {
        res.send(book);
    }).catch(error => {
        res.status(500).send("book was not stored in database")
    });

});
module.exports = router;