const express = require('express')
const app = express()
const session = require('express-session')
const router = require('./routes/index')
const item = require('./routes/item')
const register = require('./routes/register')
const logout = require('./routes/logout')
const login = require('./routes/login')
const search = require('./routes/search')
// var urlencodedParser = require('urlencoded-parser'); // ES5
app.use(express.urlencoded({
    extended:false
}))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'treassure-fox',
  resave: false,
  saveUninitialized: false,
}))



app.use('/', router)

app.use('/items', item)

app.use('/register', register)

app.use('/login', login)

app.use('/logout', logout)

app.use('/search', search)

app.listen(3000, () => {
    console.log('Connected with port 3000');
})