var http = require("http");
var st = require("st");
var commandLineArgs = require("command-line-args");

// Defini
var interface = commandLineArgs([
    { name: "hostname", alias: "h", type: String },
    { name: "port", alias: "p", type: Number},
    { name: "dir", alias: "d", type: String}
]);

// Parsing the CLAs
try {
    var argOptions = interface.parse();
    
// If there is an error, log the usage and exit the process
} catch (err) {
    console.log(interface.getUsage());
    process.exit();
}

// Default port is 3000
var port = argOptions.port || 3000;

// Default hostname is localhost
var hostname = argOptions.hostname || "localhost";

// Default directory is CWD
var dir = __dirname + ((argOptions.dir) ? ("/" + argOptions.dir) : "");

// Tries to create server, logging any thrown errors
try {
    http.createServer(st( { path: dir, index: "index.html", cache: true})).listen(port, hostname);
} catch (err) {
    console.log(err.name + ": " + err.message);
}

// Alerting user that the server has been properly created
console.log("Server for " + dir + " started at " + hostname + ":" + port);