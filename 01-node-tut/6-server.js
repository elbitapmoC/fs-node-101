const http = require("http");
const fs = require("fs");

const port = 3000;

// We have access to two functions, req & res
const server = http.createServer((req, res) => {
  console.log(req.url);

  // Set header content type
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path += "index.html";
      break;]
    case "/about":
      res.statusCode = 200;
      path += "about.html";
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }

  // send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });
});

// Here we're using our own computer as a host
// ports - like doors into your computer
server.listen(port, "localhost", () => {
  console.log(`🚀 Listening... Port: ${port}`);
});
