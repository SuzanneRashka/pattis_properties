const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("body-parser").text());

// const connection = mysql.createConnection({
//     port: 8889,
//     host: "127.0.0.1",
//     user: "root",
//     password: "root",
//     database: "pattisprops"
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }

//     console.log("connected as id " + connection.threadId);
// });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

app.use(express.static(path.join(__dirname + '/client/build/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.get('/', (req, res) => {
//     console.log('routes folder accessed');
// })

// If no API routes are hit, send the React app
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
