var http = require("http");
var st = require("st");
var external_ip = require("external-ip");

var ipInst = external_ip();

var port = 3000;

try {
    
    // Getting the server's external IP address
    ipInst(function (error, ip) {
        if (error) {
            throw error;
        }
           
        http.createServer(
           st( { path: __dirname, index: "index.html", cache: true} )).listen(port, ip);
        console.log("Server started at " + ip + ":" + port);
    });
} catch (err) {
    console.log(err.name + ": " + err.message);
}