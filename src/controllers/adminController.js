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
    // console.log(title,libraryName,author)

    const book = new Book({
        title
    })

    const library = new Library({
        name: libraryName
    })

    const author = new Author({
        name: authorName
    })
}