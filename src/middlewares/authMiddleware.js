
exports.checkSession = (req,res,next) => {
    if(req.session && req.session.userId) {
        next()
    } else {
        res.redirect('/register')
    }
}

exports.checkRole = (req,res,next) => {
    if (req.session && req.session.role === 'admin') {
        res.render('admin/adminDash', {
            title: 'Admin Dashboard',
            layout: 'layouts/adminLayout'
            });
    } else {
        res.render('user/userDash', {
        title: 'User Dashboard',
        layout: 'layouts/userLayout'
        });
    }
}

