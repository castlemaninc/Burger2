var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
var bodyParser = require("body-parser");


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});


// show all the burger data in the database 
router.get("/api/all", function(req,res){
  burger.findAll({}).then(function(results){
    res.json(results);
  })
})

// get all the burgers in the database and render the index.handlebars page 
router.get("/burgers", function(req,res){
  burger.findAll({}).then(function(data){
    var hbsObject = {burgers : data};
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req,res){
  burger.create({
    burger_name : req.body.burger_name
    }).then(function(result){
      console.log(result);
    res.redirect("/burgers");
  });
});


// put route -> back to index
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
  

module.exports = router;

