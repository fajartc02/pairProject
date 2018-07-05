'use strict';

const axios = require('axios')

module.exports = (sequelize, DataTypes) => {
  var Warehouse = sequelize.define('Warehouse', {
    warehouseName: DataTypes.STRING,
    location: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});

  Warehouse.geocode = function (location, cb){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
      params : {
        address : location,
        key : 'AIzaSyCkN-9M-2TCwMz9sXFECe60cA7tZcgeezI'
      }
    })
    .then( result => {
      let hasilObj = {
        coordinate: result.data.results[0].geometry.location,
        address: result.data.results[0].formatted_address
      }
      cb (hasilObj)
    })
  }

  Warehouse.distance = function (lat1, lng1, lat2, lng2, cb){
    let R = 6371e3
    let φ1 = lat1 * (Math.PI / 180)
    let φ2 = lat2 * (Math.PI / 180)
    let Δφ = (lat2-lat1) * (Math.PI / 180)
    let Δλ = (lng2-lng1) * (Math.PI / 180)

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = (R * c) / 1000

    cb (Number(d.toFixed(2)))
  }

  Warehouse.associate = function(models) {
    // associations can be defined here
    Warehouse.belongsToMany(models.Item, {through: models.ItemWarehouse})
    Warehouse.hasMany(models.ItemWarehouse)
  };
  return Warehouse;
};