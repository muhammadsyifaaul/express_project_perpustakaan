const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware')
const authController = require('../controllers/authController')

router.get('/',authMiddleware.checkSession,authMiddleware.checkRole,(req,res) => {
    res.render('admin/adminDash', {
        title: 'Admin Dashboard',
        layout: 'layouts/adminLayout'
    });
})


router.get('/register',(req,res) => {
    res.render('register',{
        title: 'Register',
        layout: 'layouts/auth'
    })
})


router.get('/login',(req,res) => {
    res.render('login', {
        title: 'Login',
        layout: 'layouts/auth'
    })
})

router.post('/register', (req,res) => {
    authController.register(req,res)
})


module.exports = router