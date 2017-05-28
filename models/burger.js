
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




// module.exports = Burger;


module.exports = function(sequelize, DataTypes) {
	var burgers = sequelize.define("burgers", {
    
	    id: {
		    type: DataTypes.INTEGER,
		    autoIncrement: true,
		    primaryKey: true
		}, 
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	}, {
		timestamps: false
	}, {
	    classMethods: {
			associate: function(models) {
	        // associations can be defined here
			}
	    }
  });

  return burgers;
};

