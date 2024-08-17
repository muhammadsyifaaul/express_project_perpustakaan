const { Author, Library ,Book} = require('../models/index');

exports.adminDash = async (req, res) => {
    const authors = await Author.find().populate('books', 'title');
    const library = await Library.find();

    console.log(authors);
    console.log(library);
    
    res.render('admin/adminDash', {
        title: 'Admin Dashboard',
        layout: 'layouts/adminLayout',
        authors, 
        library
    });
};

exports.createPage = async (req,res) => {
    res.render('admin/createPage', {
        title: 'Create Page',
        layout: 'layouts/adminLayout'
    })
}


exports.addData = async (req,res) => {
    const { title,libraryName,authorName } = req.body;
    const book = new Book({
        title
    })

    const library = new Library({
        name: libraryName
    })

    const author = new Author({
        name: authorName
    })

    await Promise.all([book.save(),library.save(),author.save()])
    .then(res => console.log('data added successfully'))
    .catch(err => console.log(err))

    author.books.push(book._id)
    library.books.push(book._id)

    await Promise.all([author.save(),library.save()])
            .then(res => console.log('added author to book & added books to library'))
            .catch(err => console.log(err))
            res.redirect('/admin')
}

exports.detailsBook = async (req,res) => {
    const {id} = req.params
    const book = await Book.findById(id).populate('author', 'name')
    // console.log(book)
    res.render('admin/book', {
        title: 'Details',
        layout: 'layouts/adminLayout',
        book
    })
}