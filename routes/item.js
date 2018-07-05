const router = require('express').Router()
const Model = require('../models')
const Item = Model.Item
// data for ADMIN
router.get('/', (req, res) => {
    Item.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(dataItem => {
        console.log(req.session.username);
        
        res.render('item.ejs', {dataItems:dataItem,user:req.session.username})
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
        
        res.redirect('/items')
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
        res.redirect('/items')
    })
})

router.get('/:id/delete', (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/items')
    })
})


module.exports = router