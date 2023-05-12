//Essentially const http = require("http") is acting how import in react does
//import http from "http"
const http = require("http");

// Option 1
// http.createServer((request, response) => {
//     response.writeHead(200,{ "content-type": "text/html" });
//     response.write("Sup Earth?");
//     response.end();
// }).listen(5000, () => {
//     console.log("Server listening at http://localhost:5000...");
// });

//Option 2
const server = http.createServer((req, res) => {
    //this is where the server magic happens
    res.end("You can do it! *in Adam Sandler movie voice*");
});

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`)
});