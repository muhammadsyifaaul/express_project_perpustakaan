const express = require('express');
const router = express.Router();

router.get('/admin',(req,res) => {
    res.render('admin/adminDash', {
        title: 'Admin Dashboard',
        layout: 'layouts/adminLayout'
        });
})

module.exports = router