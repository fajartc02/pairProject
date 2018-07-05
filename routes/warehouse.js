const router = require('express').Router()
const Model = require('../models')
const Warehouse = Model.Warehouse

router.get('/', (req, res) => {
    Warehouse.findAll({
        order: [
            ['id', 'ASC']
        ]
    })
    .then(warehouses => {
        res.render('warehouse.ejs', {warehouses: warehouses, user:req.session.username})
    })
    .catch(err => {
        res.send(err.message)
    })
})

router.get('/add', (req, res) => {
    res.render('add-warehouse.ejs')
})

router.post('/add', (req, res) => {
    Warehouse.create({
        warehouseName: req.body.warehouseName,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address
    })
    .then(() => {
        res.redirect('/warehouses')
    })
    .catch(err =>{
        res.send(err.message)
    })
})

router.get('/:id/edit', (req, res) => {
    Warehouse.findById(req.params.id)
    .then(warehouse => {
        res.render('edit-warehouse.ejs', {warehouse:warehouse})
    })
    .catch(err => {
        res.send(err.message)
    })
})

router.post('/:id/edit', (req, res) => {
    Warehouse.update({
        warehouseName: req.body.warehouseName,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address
    }, {
        where: {
            id:req.params.id
        }
    })
    .then(() => {
        res.redirect('/warehouses')
    })
    .catch(err =>{
        res.send(err.message)
    })
})

router.get('/:id/delete', (req, res) => {
    Warehouse.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.redirect('/warehouses')
    })
})




module.exports = router