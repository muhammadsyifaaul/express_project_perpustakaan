const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.redirect('/register')
})


router.get('/register',(req,res) => {
    res.render('login',{
        title: 'Register',
        layout: 'layouts/auth'
    })
})


router.get('/login',(req,res) => {
    res.render('login')
})



module.exports = router