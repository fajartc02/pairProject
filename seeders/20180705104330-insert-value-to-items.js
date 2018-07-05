'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Items', [{
      itemName: 'PLC module',
      price: 2000000,
      type: 'Electric',
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      itemName: 'Servo Motor',
      price: 2500000,
      type: 'Electric',
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      itemName: 'Photo Sensor',
      price: 800000,
      type: 'Electric',
      createdAt: new Date(),
      updatedAt: new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
