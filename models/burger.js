
// Dependencies 
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// define the data in the burgers_db 
var Burger = sequelize.define("Burger", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
}, {
  timestamps: false
});


Burger.sync();

module.exports = Burger;
