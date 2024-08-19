const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override');
const authRoutes = require('./src/routes/authRoutes')
const expressLayouts = require('express-ejs-layouts')
const adminRoutes = require('./src/routes/adminRoutes')
const userRoutes = require('./src/routes/userRoutes')

mongoose.connect('mongodb://localhost:27017/express_project_perpustakaan')
.then(res => console.log('connected to mongodb'))
.catch(err => console.log(err)) 

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'));
app.set('layout', 'layouts/layout');
app.use(express.urlencoded({ extended: true }))
app.use(expressLayouts);
app.use(methodOverride('_method'))
app.use(session({
    secret: 'abogoboganaldshhsd', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  
}));

app.use('/',authRoutes)
app.use(adminRoutes)
app.use(userRoutes)



app.listen(3000, () => {
    console.log('server running perfectly')
})