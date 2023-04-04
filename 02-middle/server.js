// What is MIddleware
// Function that's ran BETWEEN(in the middle) of a user making a request to the server and the server sending back a reponse
// The BIGGEST thing: Middleware has access to both res and req and can modify as needed.
// Has a 3rd param(next)
const express = require("express");
const app = express();

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", authUsersAccess, (req, res) => {
  console.log(req.admin);
  res.send("Users Page");
});

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
  // The application loads forever and never actually finishes the request, this is where next come sin
  next();
}

function authUsersAccess(req, res, next) {
  // http://localhost:3000/users?admin=true
  // console.log(req.query);
  // { admin: 'true' }
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    res.send("ERROR: You must be an admin");
  }
}

app.listen(3000, () => console.log("Server Started"));
