
exports.checkSession = (req,res,next) => {
    if(req.session && req.session.userId) {
        next()
    } else {
        res.redirect('/register')
    }
}

exports.checkRole = (req,res,next) => {
    if (req.session && req.session.role === 'admin') {
        // Arahkan ke halaman admin jika role adalah 'admin'
        next()
    } else {
        // Arahkan ke halaman user jika role adalah 'user'
        res.render('user/userDash', {
        title: 'User Dashboard',
        layout: 'layouts/userLayout'
        });
    }
}

