
exports.checkSession = (req,res,next) => {
    if(req.session && req.session.userId) {
        next()
    } else {
        res.redirect('/register')
    }
}

exports.checkRole = (req,res,next) => {
    if (req.session && req.session.role === 'admin') {
        res.redirect('/admin')
    } else {
        res.redirect('/user')
    }
}

