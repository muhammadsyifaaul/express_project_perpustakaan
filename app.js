const path = require('path')
const express = require('express')
const app = express()
const authRoutes = require('./src/routes/authRoutes')
const expressLayouts = require('express-ejs-layouts')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'));
app.set('layout', 'layouts/layout');
app.use(express.urlencoded({ extended: true }))
app.use(expressLayouts);

app.use('/',authRoutes)




app.listen(3000, () => {
    console.log('server running perfectly')
})