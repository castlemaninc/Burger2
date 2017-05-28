
// Dependencies 
// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

// // define the data in the burgers_db 
// var Burger = sequelize.define("burgers", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   burger_name: Sequelize.STRING,
//   devoured: Sequelize.BOOLEAN
// }, {
//   timestamps: false
// });


// Burger.sync();

// module.exports = Burger;

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Author model a name of type STRING
    id: {
	    type: Sequelize.INTEGER,
	    autoIncrement: true,
	    primaryKey: true
	},
		burger_name: Sequelize.STRING,
		devoured: Sequelize.BOOLEAN
	}, {
		timestamps: false
	}, {
	    classMethods: {
	      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};