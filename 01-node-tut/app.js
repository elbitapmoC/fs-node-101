const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

//creates a new http server & returns it
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server @ http://${hostname}/${port}`);
});
