
const connection = require("../config/connection");

module.exports = function (app) {
    // Get all clients
    app.get("/api/all", function (req, res) {
        var allClientQuery = "SELECT * FROM clients;";

        connection.query(allClientQuery, function (err, result) {
            if (err) throw err;
            res.json(JSON.stringify(result));
        });
    });
    // add a client
    app.post("/api/new", function (req, res) {
        console.log("posting: " + req.body);
        var addDB = "INSERT INTO clients (first_name, last_name) VALUES (?,?);";

        connection.query(addDB, [req.body.first_name, req.body.last_name],
            function (err, result) {
                if (err) throw err;
                console.log("client saved to db");
                res.end();
            })
    })

};

