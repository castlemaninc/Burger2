// var orm = require("../config/orm");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };


var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

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
