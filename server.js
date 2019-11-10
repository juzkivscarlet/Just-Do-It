var express = require('express');
var handlebars = require('express-handlebars');
var orm = require('./config/orm.js');
var connection = require('./config/connection.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

orm.gatherSongs();

var router = require('./controllers/router.js');
app.use('/', router);

app.listen(PORT, function() {
    console.log("Listening @ http://localhost:"+PORT);
});