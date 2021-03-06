// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require('mysql');
// Set up our connection information
const connection = mysql.createConnection({
    port: 8889,
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "pattisprops"
});

// Connect to the database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;