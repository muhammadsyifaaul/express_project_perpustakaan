const { Author, Library, Book } = require('../models/index')

exports.adminDash = async (req, res) => {
  const authors = await Author.find().populate('books', 'title')
  const library = await Library.find()

  // console.log(authors)
  // console.log(library)

  res.render('admin/adminDash', {
    title: 'Admin Dashboard',
    layout: 'layouts/adminLayout',
    authors,
    library
  })
}

exports.createPage = async (req, res) => {
  res.render('admin/createPage', {
    title: 'Create Page',
    layout: 'layouts/adminLayout'
  })
}

exports.addData = async (req, res) => {
  try {
    const { title, libraryName, authorName } = req.body;

    const [author, library] = await Promise.all([
      new Author({ name: authorName }).save(),
      new Library({ name: libraryName }).save()
    ]);

    const book = await new Book({ title, author: author._id }).save();

    await Promise.all([
      Author.findByIdAndUpdate(author._id, { $push: { books: book._id } }),
      Library.findByIdAndUpdate(library._id, { $push: { books: book._id } })
    ]);

    res.redirect('/admin');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding data');
  }
};


exports.detailsBook = async (req, res) => {
  const { id } = req.params
  const book = await Book.findById(id).populate('author', 'name')
  console.log(book)
  res.render('admin/book', {
    title: 'Details',
    layout: 'layouts/adminLayout',
    book
  })
}

exports.detailsLibrary = async (req,res) => {
  const {id} = req.params
  const library = await Library.findById(id).populate('books', 'title')
  res.render('admin/library', {
    title: 'Details',
    layout: 'layouts/adminLayout',
    library
  })
}

exports.detailsAuthor = async (req,res) => {
  const {id} = req.params
  const author = await Author.findById(id).populate('books', 'title')
  // console.log(author)
  res.render('admin/author', {
    title: 'Details',
    layout: 'layouts/adminLayout',
    author
  })
}

exports.editBookPage = async (req,res) => {
  const {id} = req.params
  const book = await Book.findById(id).populate('author')
  // console.log(book)
  res.render('admin/editBook', {
    title: 'Edit Book',
    layout: 'layouts/adminLayout',
    book
  })
}
exports.editBook = async (req,res) => {
  const {title , authorName} = req.body
  const {id} = req.params
  console.log(title,authorName,id)
}