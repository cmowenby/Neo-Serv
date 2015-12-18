var http = require("http");
var st = require("st");

var port = 8080;
var hostname = "localhost";

try {
    http.createServer(st( { path: __dirname, index: "index.html", cache: true})).listen(port, hostname);
} catch (err) {
    console.log(err.name + ": " + err.message);
}

console.log("Server started at " + hostname + ":" + port);