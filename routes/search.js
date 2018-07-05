const router = require('express').Router()
const Model = require('../models')
const axios = require('axios')

router.get('/', (req, res) => {
  res.render('search.ejs')
})

router.post('/result', (req, res)=> {
  Model.Warehouse.geocode('Hacktiv8 Indonesia', (result)=> {
    let user = {
      address: result.address,
      coordinate: result.coordinate
    }
    Model.Warehouse.findAll()
    .then (warehouses => {
      warehouses.forEach (warehouse => {
        let coordinateArr = warehouse.location.split(',')
        let lat = +coordinateArr[0]
        let lng = +coordinateArr[1]
        let distance = Model.Warehouse.distance(user.coordinate.lat, user.coordinate.lng,)
      })
      res.send(Model.Warehouse.distance(1,2,3,4, ))
    })
    
  })

})


module.exports = router