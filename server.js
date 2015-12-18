var http = require("http");
var st = require("st");

var port = 3000;
var hostname = process.argv[2] | "localhost";

try {
    http.createServer(st( { path: __dirname, index: "index.html", cache: true})).listen(port, hostname);
} catch (err) {
    console.log(err.name + ": " + err.message);
}

console.log("Server started at " + hostname + ":" + port);