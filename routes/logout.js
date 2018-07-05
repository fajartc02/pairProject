const router = require('express').Router()
const Model = require('../models')

router.get('/', (req, res) => {
    // res.send('logout')
    res.redirect('/')
})

module.exports = router