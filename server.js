// require dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Set port to either host's designated port or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our express app
var app = express();

// Set up express router
var router = express.Router();

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set our public folder as static
app.use(express.static(__dirname + "/public"));

// connect handlebars to express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set every express request to be handled by router middleware
app.use(router);

// listen on port and tell me when its listening
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});