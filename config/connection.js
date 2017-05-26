// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql99",
//   database: "burgers_db"
// });


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

var Sequelize = require("sequelize");

var sequelize = new Sequelize("burgers_db","root","mysql99", {
	host: "localhost",
	dialect: "mysql",
	pool: {		
		max:5,
		min:0,
		idle: 10000
	}
});

// exports the connection for other files to use
module.exports = sequelize;
