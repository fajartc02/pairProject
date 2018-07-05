const router = require('express').Router()
const Model = require('../models')
const Item = Model.Item

router.get('/', (req, res) => {
    Item.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(dataItem => {
        res.render('item.ejs', {dataItems:dataItem})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/add', (req, res) => {
    res.render('add-item.ejs')
})

router.post('/add', (req, res) => {
    Item.create({
        itemName: req.body.nameItem,
        price: req.body.price,
        type: req.body.type
    })
    .then(() => {
        console.log(req.body.type);
        
        res.redirect('/item')
    })
})

router.get('/:id/edit', (req, res) => {
    let idItem = req.params.id
    Item.findById(idItem)
    .then(dataItem => {
        res.render('edit-item.ejs', {dataItem:dataItem})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/:id/edit', (req, res) => {
    Item.update({
        itemName: req.body.nameItem,
        price: req.body.price,
        type: req.body.type,
    }, {
        where: {
            id:req.params.id
        }
    })
    .then(() => {
        res.redirect('/item')
    })
})

router.get('/:id/delete', (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/item')
    })
})


module.exports = router