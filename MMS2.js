const express = require('express')
const app = express()
app.use(express.urlencoded({
    extended:false
}))

const router = require('./routes/index')
app.use('/', router)

const item = require('./routes/item')
app.use('/item', item)

const warehouse = require('./routes/warehouse')
app.use('/warehouses', warehouse)

const search = require('./routes/search')
app.use('/search', search)

app.listen(3000, () => {
    console.log('Connected with port 3000');
})