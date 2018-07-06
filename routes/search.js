const router = require('express').Router()
const Model = require('../models')
const Op = require('sequelize').Op

router.get('/', (req, res) => {
  res.render('search.ejs')
  .catch(err=>{
    res.send(err.message)
  })
})

router.post('/result', (req, res)=> {
  Model.Item.find({
    where: {itemName: {[Op.iLike]: `%${req.body.item}%`}},
    include: [Model.ItemWarehouse, Model.Warehouse]
  })
  .then(item => {
    Model.Warehouse.geocode(req.body.location, (result)=> {
      let user = {
        address: result.address,
        coordinate: result.coordinate
      }
      let distanceArr= []  
      
      if (item.Warehouses.length > 0){

        for (let i = 0; i < item.Warehouses.length; i++){
  
          let coordinateArr = item.Warehouses[i].location.split(',')
          let latWH = +coordinateArr[0]
          let lngWH = +coordinateArr[1]
  
          Model.Warehouse.distance(user.coordinate.lat, user.coordinate.lng, latWH, lngWH, (distanceResult)=>{
            
            distanceArr.push(distanceResult)
          })
        }
      } 
      distanceArr
      res.render('search-result.ejs', {item:item, distanceArr:distanceArr})
    })
  })
  .catch (err=>{
    res.send(err.message)
  })

})


module.exports = router