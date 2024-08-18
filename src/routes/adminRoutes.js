const express = require('express');
const { adminDash, createPage, addData, detailsBook, detailsLibrary, detailsAuthor } = require('../controllers/adminController');
const { checkSession } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/admin',checkSession,adminDash)
router.get('/createData',createPage)
router.post('/addData',addData)
router.get('/details/book/:id',detailsBook)
router.get('/details/library/:id',detailsLibrary)
router.get('/details/author/:id',detailsAuthor)

module.exports = router