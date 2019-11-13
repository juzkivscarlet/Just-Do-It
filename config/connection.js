var mysql = require('mysql');

var con;

if(process.env.JAWSDB_URL) {
    con = mysql.createConnection({
        host: "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vfochzi9inggw5wk",
        password: "yizd22j16l23l4te",
        port: 3306,
        database: "pzao8nbq0p6vtcvl"
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