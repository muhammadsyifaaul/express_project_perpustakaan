const mongoose = require('mongoose')

const librarySchema = mongoose.Schema({
    name: String,
    address: String,
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
})

const Library = mongoose.model('Library',librarySchema)

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

const Book = mongoose.model('Book',bookSchema)

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
})

const Author = mongoose.model('Author',authorSchema)

module.exports = {Library,Book,Author}