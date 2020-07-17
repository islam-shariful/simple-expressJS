const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware");
  next();
});
app.use((req, res, next) => {
  console.log("another middleware");
  res.send("<h1>another middleware</h1>");
});

// const http = require("http");
// const server = http.createServer(app);

// server.listen(3000);
//  //instead

app.listen(3000);
