const validator = require('validator');
const {User} = require('../models/index')




exports.register = async (req, res) => {
    const { username, password } = req.body;
    // console.log(username,password)

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



exports.login = async (req,res,next) => {
    let {username,password} = req.body
    username = validator.trim(username);
    username = validator.escape(username);
    password = validator.trim(password);
    password = validator.escape(password);
    const user = await User.validationUser(username,password)
    if(user) {
            req.session.userId = user._id
            req.session.role = user.role
            next()
    } else {
        res.redirect('/login')
    }
}