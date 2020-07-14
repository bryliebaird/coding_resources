/* Node.js Boilerplate using Express */ 

// Express 
const express = require('express');
const app = express();

// EJS - 
const ejs = require('ejs');

// Request - 
const request = require('request');

app.set("view engine", "ejs");
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('home.ejs')
});

app.listen(3000, function (req, res){
    console.log("Gif Search app is listening on port 3000, woohoo!")
});