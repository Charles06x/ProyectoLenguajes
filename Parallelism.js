const cluster = require('cluster');
const os = require('os');
var http = require("http");

((port) => {
    if (cluster.isMaster) {
        // fork the process
        os.cpus().forEach((cpu) => {
            cluster.fork();
        });

    } else {
        // if we're not in the master thread, start the HTTP server
        http.createServer((req, res) => {
            // Handle request
        }).listen(port, () => {
            console.log(`Hello World from core ${cluster.worker.id} `);
            
        });
    }
})(3000)