const express = require('express')
const app = express()
// var urlencodedParser = require('urlencoded-parser'); // ES5
app.use(express.urlencoded({
    extended:false
}))
const router = require('./routes/index')
app.use('/', router)

const item = require('./routes/item')
app.use('/item', item)


app.listen(3000, () => {
    console.log('Connected with port 3000');
})