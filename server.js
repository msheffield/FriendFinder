// Require express
var express = require("express");

// Set up express
var app = express();
var PORT = 3000;

// Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set up API routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  