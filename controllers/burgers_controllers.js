const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

//CREATE ALL THE ROUTES

router.get("/", function(req, res){
    burger.all(function(data){
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject); 
    });
});

router.post("/", function(req, res){
    burger.insert(req.body.burger_name, function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req,res){
    var burgerID = req.params.id;
    burger.update(burgerID, function(){
        res.redirect("/")
    })
})

module.exports = router;