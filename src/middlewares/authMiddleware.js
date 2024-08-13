
exports.checkSession = (req,res,next) => {
    if(req.session && req.session.userId) {
        next()
    } else {
        res.redirect('/login')
    }
}

exports.checkAdmin = (req,res,next) => {
    if(req.session && req.session.role === 'admin') {
        next()
    }
}

