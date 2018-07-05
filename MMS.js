const express = require('express')
const app = express()
// var urlencodedParser = require('urlencoded-parser'); // ES5
const models = require('./models')
app.use(express.urlencoded({
    extended:false
}))

models.Warehouse.create({
    warehouseName: 'test',
    location: {type: 'Point', coordinates: [-6,106]},
    phoneNumber: '098765756',
    email: 'a@mail.com',
    address: ''
})
.then()
const router = require('./routes/index')
app.use('/', router)

const item = require('./routes/item')
app.use('/item', item)

app.listen(3000, () => {
    console.log('Connected with port 3000');
})