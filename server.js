const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;


/* MIDDLEWARE */
//===============================================
//serve static content i.e. css and jquery files
app.use(express.static("public"));

//basic bodyParser inclusion
app.use(bodyParser.urlencoded({extended: false}));

//Override with POST having ?_modthod=PUT or ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//IMPORT THE ROUTES MADE IN THE controllers/burgers_controllers.js file
let routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

//===============================================


app.listen(port, function(){
    console.log(`listening on port ${port}`)
})