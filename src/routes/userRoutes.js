const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/user',(req,res) => {
    res.render('user/userDash', {
        title: 'User Dashboard',
        layout: 'layouts/userLayout'
        });
})

module.exports = router