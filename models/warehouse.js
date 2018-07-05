'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warehouse = sequelize.define('Warehouse', {
    warehouseName: DataTypes.STRING,
    location: DataTypes.GEOMETRY,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Warehouse.associate = function(models) {
    // associations can be defined here
    Warehouse.belongsToMany(models.Item, {through: models.ItemWarehouse})
    Warehouse.hasMany(models.ItemWarehouse)
  };
  return Warehouse;
};