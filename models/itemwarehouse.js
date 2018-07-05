'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemWarehouse = sequelize.define('ItemWarehouse', {
    ItemId: DataTypes.INTEGER,
    WarehouseId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {});
  ItemWarehouse.associate = function(models) {
    // associations can be defined here
    ItemWarehouse.belongsTo(models.Item)
    ItemWarehouse.belongsTo(models.Warehouse)
  };
  return ItemWarehouse;
};