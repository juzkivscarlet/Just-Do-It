var mysql = require('mysql');
// require('dotenv').config();

var con;

if(process.env.JAWSDB_URL) {
    con = mysql.createConnection({
        host: process.env.JAWS_HOST,
        user: process.env.JAWS_USER,
        password: process.env.JAWS_PASSWORD,
        port: 3306,
        database: process.env.JAWS_DATABASE,
        dialect: "mysql"
    });
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
