var mysql = require('mysql');

var con;

if(process.env.JAWSDB_URL) {
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "just_do_it"
    });
}


con.connect(function(err) {
    if(err) throw err;
    console.log("Connected");
});

module.exports = con;