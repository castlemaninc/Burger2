var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});



// router.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(data) {
//     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

// show all the burgers in the database 
router.get("/api/all", function(req,res){
  burger.findAll({}).then(function(results){
    res.json(results);
  })
})

router.get("/burgers", function(req,res){
  burger.findAll({}).then(function(data){
    var hbsObject = {burgers : data};
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req,res){
  burger.create({
    burger_name : req.body.burger_name
    }).then(function(result){
      console.log(result);
    res.redirect("/burgers");
  });
});

// // post route -> back to index
// router.post("/burgers/create", function(req, res) {
//   // takes the request object using it as input for buger.addBurger
//   burger.create(req.body.burger_name, function(result) {
//     // wrapper for orm.js that using MySQL insert callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

router.put("/burgers/update", function(req,res){
  var eaten = {
    devoured : 1
  }
  burger.update(eaten,{

    where : {
      id : req.body.burger_id
    }
  }).then(function(result){
    console.log(result);
    res.redirect("/");
  });

});
  
// // put route -> back to index
// router.put("/burgers/update", function(req, res) {
//   burger.update(req.body.burger_id, function(result) {
//     // wrapper for orm.js that using MySQL update callback will return a log to console,
//     // render back to index with handle
//     console.log(result);
//     res.redirect("/");
//   });
// });

module.exports = router;

