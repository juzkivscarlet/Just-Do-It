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

app.get("/", function(req,res) {
    res.render("index", {
        song: orm.songs
    });
    // orm.orm.listData();
});

app.get("/:table", function(req,res) {
    connection.query(`select * from ??`, [req.params.table], function(err,data) {
        if(err) throw err;
        res.send(data);
    });
});

app.put("/:table/:id", function(req,res) {
    connection.query(`update ?? set completed = 'yes' where id = ?`, [req.params.table, req.params.id], function(err,result) {
        if(err) throw err;
        res.status(200).end();
        orm.gatherSongs();
    });
});

app.get("/api/songs", function(req,res) {
    res.json(orm.songs);
});

app.listen(PORT, function() {
    console.log("Listening @ http://localhost:"+PORT);
});