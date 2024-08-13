const mongoose = require('mongoose')
const argon2 = require('argon2');
const { use } = require('express/lib/application');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin','user'],
        default: 'user'
    },
    borrowedBooks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
})

userSchema.pre('save', function(next) {
    if (this.role !== 'user') {
        this.borrowedBooks = undefined;
    }
    next();
});

userSchema.pre('save', async function(next){
    const user = this
    if(!user.isModified('password')) return next()

    user.password = await argon2.hash(this.password)

    next()
})

userSchema.statics.validation = async function(username) {
    const user = this.findOne({username})
    const isValid = await argon2.verify(user.password);
    
    return isValid ? user : null
}

const User = mongoose.model('User',userSchema)

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

module.exports = {User,Library,Book,Author}