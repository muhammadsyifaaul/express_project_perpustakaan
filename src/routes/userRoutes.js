

router.get('/user/userDash',(req,res) => {
    res.render('user/userDash', {
        title: 'User Dashboard',
        layout: 'layouts/userLayout'
        });
})