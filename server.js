var express = require("express");
var path = require("path");

// Set up Express
var app = express();
var PORT = 3000;

//Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());