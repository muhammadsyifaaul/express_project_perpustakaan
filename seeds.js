const mongoose = require('mongoose')
const {User,Library,Book,Author} = require('./src/models/index')

mongoose.connect('mongodb://localhost:27017/express_project_perpustakaan')
.then(res => console.log('connected to mongodb'))
.catch(err => console.log(err)) 

const addData = async () => {
    const user = new User({
        username: 'admin',
        password: 'admin',
        role: 'admin'
    })
    const library = new Library({
        name: 'Library World',
        address: 'Jakarta'
    })
    const author = new Author({
        name: 'James',
    })
    const book = new Book({
        title: 'The Lord of the Rings',
        author: author._id
    })
    await Promise.all([user.save(),library.save(),author.save(),book.save()])
    .then(res => console.log('data added successfully'))
    .catch(err => console.log(err))
    author.books.push(author._id)
    library.books.push(book._id)

    await Promise.all([author.save(),library.save()])
            .then(res => console.log('added author to book & added books to library'))
            .catch(err => console.log(err))
}


addData()