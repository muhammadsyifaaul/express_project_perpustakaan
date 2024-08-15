const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const authRoutes = require('./src/routes/authRoutes')
const expressLayouts = require('express-ejs-layouts')

mongoose.connect('mongodb://localhost:27017/express_project_perpustakaan')
.then(res => console.log('connected to mongodb'))
.catch(err => console.log(err)) 

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'));
app.set('layout', 'layouts/layout');
app.use(express.urlencoded({ extended: true }))
app.use(expressLayouts);
app.use(session({
    secret: 'abogoboganaldshhsd', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  
}));

app.use('/',authRoutes)




app.listen(3000, () => {
    console.log('server running perfectly')
})