const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200,{ "content-type": "text/html" });
    response.write("Sup Earth?");
    response.end();
}).listen(5000, () => {
    console.log("Server listening at http://localhost:5000...");
});