const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//to compile dynamic templates with the pug engine
app.set("view engine", "pug");
//where to find these templates
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.pug"));
  res.render("404");
});

app.listen(3000);
