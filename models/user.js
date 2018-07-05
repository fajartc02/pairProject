'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
      }
    },
    salt: DataTypes.STRING
  }, {});
  User.confirmPassword = function(password, repassword, callback) {
    if (password === repassword) {
      callback(true)
    } else {
      callback(false)
    }
  }
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

