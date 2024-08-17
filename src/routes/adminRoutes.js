const express = require('express');
const { adminDash, createPage, addData } = require('../controllers/adminController');
const router = express.Router();

router.get('/admin',adminDash)
router.get('/createData',createPage)
router.post('/addData',addData)


module.exports = router