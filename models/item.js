'use strict';

module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var Item = sequelize.define('Item', {
    itemName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Warehouse, {through: models.ItemWarehouse})
    Item.hasMany(models.ItemWarehouse)
  };
  return Item;
};