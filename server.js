// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000; //for heroku(if 3000 port is available use that otherwise use another port which is available)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
