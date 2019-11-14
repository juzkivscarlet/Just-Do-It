module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var connection = require('../config/connection.js');
    var handlebars = require('express-handlebars');
    var orm = require('../config/orm.js');

    router.get("/", function(req,res) {
        res.render("index", {
            song: orm.songs
        });
    });

    router.get("/favicon.ico", function(req,res) {
        res.status(204);
    });

    router.get("/:table", function(req,res) {
        connection.query(`select * from ${req.params.table}`, function(err,data) {
            if(err) throw err;
            res.send(data);
        });
    });

    router.put("/:tablename/:id", function(req,res) {
        connection.query(`update ?? set completed = 'yes' where id = ?`, [req.params.table, req.params.id], function(err,result) {
            if(err) throw err;
            res.status(200).end();
            orm.gatherSongs();
        });
    });

    router.get("/api/songs", function(req,res) {
        res.json(orm.songs);
    });

    return router;
})();