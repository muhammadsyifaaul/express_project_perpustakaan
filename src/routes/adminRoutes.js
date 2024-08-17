const express = require('express');
const { adminDash, createPage, addData, detailsBook } = require('../controllers/adminController');
const router = express.Router();

router.get('/admin',adminDash)
router.get('/createData',createPage)
router.post('/addData',addData)
router.get('/details/book/:id',detailsBook)
router.get('/details/library/:id',(req,res) => {
    res.send('hello')
})
router.get('/details/author/:id',(req,res) => {
    res.send('hello')
})

module.exports = router