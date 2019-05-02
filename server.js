// require dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set port to either host's designated port or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our express app
var app = express();

// Set up express router
var router = express.Router();

// requiring routes to pass router object
require("./config/routes")(router);

// if deployed, use the deployed database, or use local mongoHeadlines database
var db = process.env.MONGODB_URL || "mongodb://localhost/mongoHeadlines";

// connect mongoose to our database
mongoose.connect(db, function(error) {
    // log errors if any
    if (error) {
        console.log(error);
    }
    // or log success message
    else {
        console.log("Mongoose connection is successful");
    }
});

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