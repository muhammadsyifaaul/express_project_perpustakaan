const express = require('express')
const app = express()
const {User} = require('../models/index')



app.use(express.urlencoded({ extended: true }));
exports.register = async (req, res) => {
    console.log(req.body); // Tambahkan ini untuk mengecek input
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required");
    }

    const user = new User({
        username,
        password
    });
    await user.save();
    res.redirect('/login');
};



exports.login = async (req,res) => {
    const {username,password} = req.body
    username.trim().escape()
    password.trim().escape()
    const user = await User.validationUser(username,password)
    if(user) {
            req.session.userId = user._id
            res.redirect('/')
    } else {
        res.redirect('/login')
    }
}